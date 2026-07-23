// Amdani Xpress Constants — shared across all packages
// Separated to avoid circular dependencies between index.ts and utils.ts

export const EXCHANGE_RATE = 19; // 1 CNY ≈ 19 BDT (approximate)

export const SERVICE_FEE_TIERS = [
  { maxAmount: 5000, percentage: 12, minFee: 300 },
  { maxAmount: 20000, percentage: 10, minFee: 0 },
  { maxAmount: 100000, percentage: 8, minFee: 0 },
  { maxAmount: 500000, percentage: 6, minFee: 0 },
  { maxAmount: Infinity, percentage: 4, minFee: 0 },
] as const;

export const SHIPPING_COST_PER_KG_AIR = 8; // USD
export const SHIPPING_COST_PER_KG_SEA = 3; // USD
export const SHIPPING_COST_PER_KG_EXPRESS = 13; // USD

export const APP_NAME = "Amdani Xpress";
export const APP_DOMAIN = "amdanixpress.com";

export const BD_CITIES = [
  "Dhaka",
  "Chattogram",
  "Sylhet",
  "Khulna",
  "Rajshahi",
  "Barishal",
  "Rangpur",
  "Mymensingh",
] as const;

export const USD_TO_BDT = 120; // Approximate USD to BDT rate
export const CUSTOMS_DUTY_RATE = 0.25; // 25% estimated customs duty

export const SHIPPING_METHODS = {
  air: { costPerKgUsd: 8, days: "7-12", label: "Air Freight" },
  sea: { costPerKgUsd: 3, days: "20-40", label: "Sea Freight" },
  express: { costPerKgUsd: 13, days: "5-8", label: "Express Courier" },
  sea_fcl: { costPerKgUsd: 2, days: "30-45", label: "Sea FCL (Container)" },
} as const;
