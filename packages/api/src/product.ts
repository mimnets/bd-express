// Product service
import { prisma } from "@bdexpress/database";

export async function getProductById(id: string) {
  return prisma.product.findUnique({ where: { id } });
}

export async function getProducts(options: {
  categorySlug?: string;
  featured?: boolean;
  search?: string;
  page?: number;
  pageSize?: number;
}) {
  const { categorySlug, featured, search, page = 1, pageSize = 20 } = options;

  const where: Record<string, unknown> = { isActive: true };

  if (categorySlug) {
    const category = await prisma.category.findUnique({
      where: { slug: categorySlug },
    });
    if (category) where.categoryId = category.id;
  }

  if (featured) where.isFeatured = true;

  if (search) {
    where.OR = [
      { titleEn: { contains: search, mode: "insensitive" } },
      { titleBn: { contains: search, mode: "insensitive" } },
    ];
  }

  const [items, total] = await Promise.all([
    prisma.product.findMany({
      where,
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      include: { category: true },
    }),
    prisma.product.count({ where }),
  ]);

  return {
    items,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  };
}

export async function fetchProductFromLink(url: string) {
  // TODO: Parse Taobao/1688 URL and fetch product data via API
  // This will use services/china-api in Phase 2
  console.log("Fetching product from link:", url);
  return null;
}
