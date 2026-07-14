import { SERVICE_FEE_TIERS, EXCHANGE_RATE } from "./constants";

// Package utilities
export const calculateServiceFee = (amountBdt: number): number => {
  const tier = SERVICE_FEE_TIERS.find((t) => amountBdt <= t.maxAmount);
  if (!tier) return amountBdt * 0.1; // fallback 10%
  const fee = amountBdt * (tier.percentage / 100);
  return Math.max(fee, tier.minFee);
};

export const convertCnyToBdt = (
  cny: number,
  rate: number = EXCHANGE_RATE,
): number => {
  return cny * rate;
};

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const generateOrderNumber = (): string => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `BDX-${timestamp}-${random}`;
};

export const formatBdt = (amount: number): string => {
  return `৳${amount.toLocaleString("en-BD")}`;
};

export const formatCny = (amount: number): string => {
  return `¥${amount.toFixed(2)}`;
};
