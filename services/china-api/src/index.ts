// 1688.com / Taobao API integration service
// Phase 1: Fetch product details from URL (scraping fallback)
// Phase 2: Official 1688 Open Platform API

export interface ChinaProductData {
  sourcePlatform: "taobao" | "alibaba_1688" | "alibaba_global";
  sourceProductId: string;
  sourceUrl: string;
  title: string;
  price: number;
  priceCurrency: "CNY";
  images: string[];
  description?: string;
  specs?: Record<string, string>;
  weight?: number;
  categoryPath?: string;
  supplierName?: string;
}

/**
 * Fetch product details from a Taobao/1688 product URL
 */
export async function fetchProductFromUrl(
  url: string,
): Promise<ChinaProductData | null> {
  // TODO: Phase 2 — Implement 1688 Open Platform API call
  // For MVP: return null so the system falls back to manual entry
  console.log(`[ChinaAPI] Fetching product from: ${url}`);
  return null;
}

/**
 * Search products on 1688 by keyword
 */
export async function searchProducts(
  keyword: string,
  platform: "taobao" | "alibaba_1688" = "alibaba_1688",
  page: number = 1,
): Promise<{ items: ChinaProductData[]; total: number }> {
  // TODO: Phase 2 implementation
  console.log(`[ChinaAPI] Searching ${platform} for: ${keyword}`);
  return { items: [], total: 0 };
}

/**
 * Parse a Taobao/1688 URL to extract the product ID and platform
 */
export function parseChineseUrl(
  url: string,
): { platform: "taobao" | "alibaba_1688"; productId: string } | null {
  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.toLowerCase();

    // Taobao: item.taobao.com, detail.tmall.com
    if (hostname.includes("taobao") || hostname.includes("tmall")) {
      // Extract ID from path or params
      const idFromPath = parsed.pathname.match(/\/item\/(\d+)/)?.[1];
      const idFromParams = parsed.searchParams.get("id");
      const productId = idFromPath || idFromParams;
      if (productId) return { platform: "taobao", productId };
    }

    // 1688: detail.1688.com, www.1688.com
    if (hostname.includes("1688")) {
      const idFromPath = parsed.pathname.match(/\/offer\/(\d+)\.html/)?.[1];
      const idFromParams = parsed.searchParams.get("offerId");
      const productId = idFromPath || idFromParams;
      if (productId) return { platform: "alibaba_1688", productId };
    }

    return null;
  } catch {
    return null;
  }
}
