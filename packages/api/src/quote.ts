// Quote generation & management
import { prisma } from "@bdexpress/database";
import {
  EXCHANGE_RATE,
  SERVICE_FEE_TIERS,
  type ShippingMethod,
  type IQuote,
} from "@bdexpress/shared";

export interface GenerateQuoteParams {
  userId: string;
  sourceUrl?: string;
  productCostCny: number;
  productDetails?: Record<string, unknown>;
  weightKg?: number;
  shippingMethod?: ShippingMethod;
}

const USD_TO_BDT = 120;
const SHIPPING_COST_PER_KG: Record<string, number> = {
  air: 8,
  sea: 3,
  express: 13,
  sea_fcl: 2,
};

const CUSTOMS_RATE = 0.25; // 25% customs duty estimate

/**
 * Calculate service fee based on tiered pricing
 */
function calculateServiceFee(amountBdt: number): number {
  const tier = SERVICE_FEE_TIERS.find((t) => amountBdt <= t.maxAmount);
  if (!tier) return Math.round(amountBdt * 0.1);
  const fee = amountBdt * (tier.percentage / 100);
  return Math.max(Math.round(fee), tier.minFee);
}

/**
 * Generate a full price quote from raw product cost in CNY
 */
export function calculateQuote(params: {
  productCostCny: number;
  weightKg?: number;
  shippingMethod?: ShippingMethod;
}): IQuote {
  const { productCostCny, weightKg = 0.5, shippingMethod = "air" } = params;

  const productCostBdt = Math.round(productCostCny * EXCHANGE_RATE);
  const serviceFeeBdt = calculateServiceFee(productCostBdt);

  const shippingCostUsdPerKg = SHIPPING_COST_PER_KG[shippingMethod] ?? SHIPPING_COST_PER_KG.air;
  const shippingFeeBdt = Math.round(shippingCostUsdPerKg * USD_TO_BDT * weightKg);

  const customsEstimateBdt = Math.round(productCostBdt * CUSTOMS_RATE);
  const grandTotalBdt = productCostBdt + serviceFeeBdt + shippingFeeBdt + customsEstimateBdt;

  return {
    productCostCny,
    productCostBdt,
    serviceFeeBdt,
    shippingFeeBdt,
    customsEstimateBdt,
    grandTotalBdt,
    currency: "BDT",
  };
}

/**
 * Save a quote to the database
 */
export async function createQuote(params: GenerateQuoteParams) {
  const quote = calculateQuote({
    productCostCny: params.productCostCny,
    weightKg: params.weightKg,
    shippingMethod: params.shippingMethod,
  });

  return prisma.quote.create({
    data: {
      userId: params.userId,
      sourceUrl: params.sourceUrl,
      productDetails: params.productDetails,
      productCostCny: params.productCostCny,
      productCostBdt: quote.productCostBdt,
      serviceFeeBdt: quote.serviceFeeBdt,
      shippingFeeBdt: quote.shippingFeeBdt,
      customsBdt: quote.customsEstimateBdt,
      grandTotalBdt: quote.grandTotalBdt,
      status: "pending",
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days expiry
    },
  });
}

/**
 * Get quotes for a user
 */
export async function getQuotesByUser(userId: string) {
  return prisma.quote.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
}

/**
 * Accept a quote (converts to order)
 */
export async function acceptQuote(quoteId: string) {
  return prisma.quote.update({
    where: { id: quoteId },
    data: { status: "accepted" },
  });
}

/**
 * Expire old pending quotes
 */
export async function expireStaleQuotes() {
  return prisma.quote.updateMany({
    where: {
      status: "pending",
      expiresAt: { lt: new Date() },
    },
    data: { status: "expired" },
  });
}
