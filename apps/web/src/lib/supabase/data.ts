/**
 * Supabase data fetching helpers.
 * Uses the anon key via REST API — safe for both server and client.
 */

const BASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

interface FetchOptions {
  select?: string;
  order?: string;
  limit?: number;
  single?: boolean;
}

async function supabaseGet<T>(
  table: string,
  options: FetchOptions = {},
): Promise<T[]> {
  const params = new URLSearchParams();
  if (options.select) params.set("select", options.select);
  if (options.order) params.set("order", options.order);
  if (options.limit) params.set("limit", String(options.limit));

  const url = `${BASE_URL}/rest/v1/${table}?${params.toString()}`;

  const res = await fetch(url, {
    headers: {
      apikey: ANON_KEY,
      Authorization: `Bearer ${ANON_KEY}`,
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 }, // ISR: revalidate every 60s
  });

  if (!res.ok) throw new Error(`Failed to fetch ${table}: ${res.statusText}`);
  return res.json();
}

// ─── Products ─────────────────────────────────────────────

export interface ProductItem {
  id: string;
  type: string;
  titleEn: string;
  titleBn: string | null;
  description: string | null;
  images: string[];
  priceCny: number;
  priceBdt: number | null;
  weightKg: number | null;
  categoryId: string | null;
  isFeatured: boolean;
  createdAt: string;
}

export async function getProducts(options?: {
  featured?: boolean;
  category?: string;
  limit?: number;
}) {
  let query = "*";
  if (options?.featured) query = `${query}&isFeatured=eq.true`;
  if (options?.category) query = `${query}&categoryId=eq.${options.category}`;

  return supabaseGet<ProductItem>("products", {
    select: query,
    order: "createdAt.desc",
    limit: options?.limit ?? 50,
  });
}

export async function getProduct(id: string) {
  const results = await supabaseGet<ProductItem>("products", {
    select: `*&id=eq.${id}`,
    limit: 1,
  });
  return results[0] ?? null;
}

// ─── Categories ───────────────────────────────────────────

export interface CategoryItem {
  id: string;
  nameEn: string;
  nameBn: string | null;
  slug: string;
  imageUrl: string | null;
}

export async function getCategories() {
  return supabaseGet<CategoryItem>("categories", {
    select: "*&isActive=eq.true",
    order: "sortOrder.asc",
  });
}

// ─── Orders ───────────────────────────────────────────────

export interface OrderItem {
  id: string;
  orderNumber: string;
  status: string;
  totalProductCostCny: number;
  serviceFeeBdt: number;
  shippingFeeBdt: number;
  customsDutyBdt: number;
  grandTotalBdt: number;
  shippingMethod: string | null;
  trackingNumber: string | null;
  productDetail: Record<string, unknown> | null;
  quantity: number;
  createdAt: string;
  updatedAt: string;
}

export async function getOrders(userId: string) {
  return supabaseGet<OrderItem>("orders", {
    select: `*&userId=eq.${userId}`,
    order: "createdAt.desc",
    limit: 50,
  });
}

export async function getOrder(id: string) {
  const results = await supabaseGet<OrderItem>("orders", {
    select: `*&id=eq.${id}`,
    limit: 1,
  });
  return results[0] ?? null;
}

// ─── Quotes ───────────────────────────────────────────────

export interface QuoteItem {
  id: string;
  sourceUrl: string | null;
  productCostCny: number;
  productCostBdt: number;
  serviceFeeBdt: number;
  shippingFeeBdt: number;
  customsBdt: number;
  grandTotalBdt: number;
  status: string;
  createdAt: string;
}

export async function getQuotes(userId: string) {
  return supabaseGet<QuoteItem>("quotes", {
    select: `*&userId=eq.${userId}`,
    order: "createdAt.desc",
    limit: 50,
  });
}
