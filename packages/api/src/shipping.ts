// Shipping & logistics service
import { prisma } from "@bdexpress/database";
import type { ShippingMethod } from "@bdexpress/shared";

export interface ShippingEstimate {
  method: ShippingMethod;
  costPerKg: number;
  costBdt: number;
  estimatedDays: string;
  description: string;
}

export const SHIPPING_OPTIONS: Record<string, ShippingEstimate> = {
  air: {
    method: "air" as ShippingMethod,
    costPerKg: 8, // USD per kg
    costBdt: 0,
    estimatedDays: "7-12",
    description: "Air freight — fastest option, 7-12 days door-to-door",
  },
  sea: {
    method: "sea" as ShippingMethod,
    costPerKg: 3, // USD per kg
    costBdt: 0,
    estimatedDays: "20-40",
    description: "Sea freight — most economical, 20-40 days door-to-door",
  },
  express: {
    method: "express" as ShippingMethod,
    costPerKg: 13, // USD per kg
    costBdt: 0,
    estimatedDays: "5-8",
    description: "Express courier — fastest, 5-8 days door-to-door",
  },
};

const USD_TO_BDT = 120; // Approximate USD to BDT rate for shipping conversions

/**
 * Calculate shipping estimates for a given weight in kg
 */
export function calculateShippingEstimates(weightKg: number): ShippingEstimate[] {
  return Object.values(SHIPPING_OPTIONS).map((option) => ({
    ...option,
    costBdt: Math.round(option.costPerKg * USD_TO_BDT * weightKg),
  }));
}

/**
 * Create a shipment record for an order
 */
export async function createShipment(params: {
  orderId: string;
  trackingNumber: string;
  carrier: string;
  destinationCity: string;
  weightKg: number;
  shippingCostCny: number;
}) {
  return prisma.shipment.create({
    data: {
      orderId: params.orderId,
      trackingNumber: params.trackingNumber,
      carrier: params.carrier,
      destinationCity: params.destinationCity,
      weightKg: params.weightKg,
      shippingCostCny: params.shippingCostCny,
    },
  });
}

/**
 * Add a status update to a shipment's tracking log
 */
export async function addTrackingUpdate(
  shipmentId: string,
  update: {
    status: string;
    location: string;
    description: string;
  },
) {
  const shipment = await prisma.shipment.findUnique({ where: { id: shipmentId } });
  if (!shipment) return null;

  const existingUpdates = (shipment.statusUpdates as Array<Record<string, unknown>>) || [];
  const newUpdate = {
    ...update,
    timestamp: new Date().toISOString(),
  };

  return prisma.shipment.update({
    where: { id: shipmentId },
    data: {
      statusUpdates: [...existingUpdates, newUpdate],
    },
  });
}

/**
 * Get tracking history for a shipment
 */
export async function getShipmentByTrackingNumber(trackingNumber: string) {
  return prisma.shipment.findUnique({
    where: { trackingNumber },
    include: { order: true },
  });
}

/**
 * Get all shipments for an order
 */
export async function getShipmentsByOrder(orderId: string) {
  return prisma.shipment.findMany({
    where: { orderId },
    orderBy: { createdAt: "desc" },
  });
}
