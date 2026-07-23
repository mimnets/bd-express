// Amdani Xpress Shared Types & Constants

export * from "./constants";
export * from "./errors";
export * from "./schemas";
export * from "./utils";

// ─── Enums ─────────────────────────────────────────────────

export enum OrderStatus {
  QUOTED = "quoted",
  PENDING_PAYMENT = "pending_payment",
  PAID = "paid",
  PURCHASING = "purchasing",
  IN_WAREHOUSE = "in_warehouse",
  QC_DONE = "qc_done",
  READY_FOR_SHIPPING = "ready_for_shipping",
  IN_TRANSIT = "in_transit",
  CUSTOMS = "customs",
  IN_BD = "in_bd",
  OUT_FOR_DELIVERY = "out_for_delivery",
  DELIVERED = "delivered",
  CANCELLED = "cancelled",
  RETURNED = "returned",
}

export enum PaymentMethod {
  BKASH = "bkash",
  NAGAD = "nagad",
  ROCKET = "rocket",
  CARD = "card",
  BANK_TRANSFER = "bank_transfer",
}

export enum PaymentStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  FAILED = "failed",
  REFUNDED = "refunded",
}

export enum UserRole {
  CUSTOMER = "customer",
  ADMIN = "admin",
  SELLER = "seller",
  SUPER_ADMIN = "super_admin",
}

export enum ProductSource {
  CURATED = "curated",
  TAOBAO = "taobao",
  ALIBABA_1688 = "alibaba_1688",
  ALIBABA_GLOBAL = "alibaba_global",
  MANUAL = "manual",
}

export enum ShippingMethod {
  AIR = "air",
  SEA = "sea",
  EXPRESS = "express",
  SEA_FCL = "sea_fcl",
}

export enum Language {
  BN = "bn",
  EN = "en",
}

// ─── Interfaces ────────────────────────────────────────────

export interface IAddress {
  id: string;
  userId: string;
  label: string;
  fullName: string;
  phone: string;
  city: string;
  district: string;
  area: string;
  streetAddress: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IProduct {
  id: string;
  type: ProductSource;
  sourcePlatform: ProductSource;
  sourceUrl?: string;
  sourceProductId?: string;
  titleEn: string;
  titleBn?: string;
  description?: string;
  images: string[];
  priceCny: number;
  priceBdt?: number;
  weightKg?: number;
  categoryId: string;
  supplierInfo?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export interface IOrder {
  id: string;
  userId: string;
  orderNumber: string;
  status: OrderStatus;
  productDetail: Record<string, unknown>;
  quantity: number;
  totalProductCostCny: number;
  serviceFeeBdt: number;
  shippingFeeBdt: number;
  customsDutyBdt: number;
  grandTotalBdt: number;
  shippingMethod: ShippingMethod;
  trackingNumber?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPayment {
  id: string;
  orderId: string;
  userId: string;
  amountBdt: number;
  paymentMethod: PaymentMethod;
  transactionId?: string;
  status: PaymentStatus;
  verifiedBy?: string;
  createdAt: string;
}

export interface IShipment {
  id: string;
  orderId: string;
  trackingNumber: string;
  carrier: string;
  originWarehouse: string;
  destinationCity: string;
  estimatedDelivery?: string;
  actualDelivery?: string;
  weightKg: number;
  shippingCostCny: number;
  customsDocs?: string[];
  statusUpdates: ITrackingEvent[];
}

export interface ITrackingEvent {
  status: string;
  location: string;
  timestamp: string;
  description: string;
}

export interface IQuote {
  productCostCny: number;
  productCostBdt: number;
  serviceFeeBdt: number;
  shippingFeeBdt: number;
  customsEstimateBdt: number;
  grandTotalBdt: number;
  currency: "BDT";
}

export interface IApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface IPaginationParams {
  page: number;
  pageSize: number;
}

export interface IPaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ─── Constants (re-exported from constants.ts for backward compat) ──────
export {
  EXCHANGE_RATE,
  SERVICE_FEE_TIERS,
  SHIPPING_COST_PER_KG_AIR,
  SHIPPING_COST_PER_KG_SEA,
  SHIPPING_COST_PER_KG_EXPRESS,
  APP_NAME,
  APP_DOMAIN,
  BD_CITIES,
} from "./constants";
