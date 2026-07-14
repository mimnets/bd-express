// Zod validation schemas — shared between client and server
import { z } from "zod";

// ─── User ─────────────────────────────────────────────────

export const registerUserSchema = z.object({
  fullName: z.string().min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে").max(100),
  phone: z
    .string()
    .regex(/^8801[3-9]\d{8}$/, "বৈধ বাংলাদেশী মোবাইল নম্বর দিন (8801XXXXXXXXX)"),
  email: z.string().email("বৈধ ইমেইল দিন").optional().or(z.literal("")),
  password: z.string().min(6, "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে").max(100),
  language: z.enum(["bn", "en"]).default("bn"),
});

export const loginSchema = z.object({
  phone: z.string().min(1, "মোবাইল নম্বর আবশ্যক"),
  password: z.string().min(1, "পাসওয়ার্ড আবশ্যক"),
});

// ─── Address ──────────────────────────────────────────────

export const addressSchema = z.object({
  label: z.string().max(50).optional(),
  fullName: z.string().min(2).max(100),
  phone: z.string().regex(/^8801[3-9]\d{8}$/, "বৈধ বাংলাদেশী মোবাইল নম্বর দিন"),
  city: z.string().min(1, "শহর আবশ্যক"),
  district: z.string().min(1, "জেলা আবশ্যক"),
  area: z.string().min(1, "এলাকা আবশ্যক"),
  streetAddress: z.string().min(1, "ঠিকানা আবশ্যক"),
  isDefault: z.boolean().default(false),
});

// ─── Product Link ─────────────────────────────────────────

export const productLinkSchema = z.object({
  url: z
    .string()
    .url("বৈধ URL দিন")
    .refine(
      (url) => url.includes("taobao.com") || url.includes("tmall.com") || url.includes("1688.com"),
      { message: "শুধুমাত্র Taobao, Tmall বা 1688 এর লিংক গ্রহণযোগ্য" },
    ),
});

export const createProductSchema = z.object({
  type: z.enum(["curated", "taobao", "alibaba_1688", "alibaba_global", "manual"]).default("curated"),
  sourceUrl: z.string().url().optional().or(z.literal("")),
  sourceProductId: z.string().optional(),
  titleEn: z.string().min(1, "Product name (English) is required").max(500),
  titleBn: z.string().max(500).optional(),
  description: z.string().max(5000).optional(),
  images: z.array(z.string().url()).min(1, "At least one image is required"),
  priceCny: z.number().positive("Price must be positive"),
  priceBdt: z.number().positive().optional(),
  weightKg: z.number().positive().optional(),
  categoryId: z.string().optional(),
  isFeatured: z.boolean().default(false),
  stockQuantity: z.number().int().min(0).default(0),
});

// ─── Order ────────────────────────────────────────────────

export const createOrderSchema = z.object({
  quoteId: z.string().optional(),
  productDetail: z.record(z.unknown()).optional(),
  quantity: z.number().int().min(1).default(1),
  shippingMethod: z.enum(["air", "sea", "express", "sea_fcl"]).default("air"),
  addressId: z.string().min(1, "ডেলিভারি ঠিকানা আবশ্যক"),
  notes: z.string().max(2000).optional(),
  isUrgent: z.boolean().default(false),
});

export const updateOrderStatusSchema = z.object({
  status: z.enum([
    "quoted",
    "pending_payment",
    "paid",
    "purchasing",
    "in_warehouse",
    "qc_done",
    "ready_for_shipping",
    "in_transit",
    "customs",
    "in_bd",
    "out_for_delivery",
    "delivered",
    "cancelled",
    "returned",
  ]),
  note: z.string().max(1000).optional(),
});

// ─── Payment ──────────────────────────────────────────────

export const initiatePaymentSchema = z.object({
  orderId: z.string().min(1),
  paymentMethod: z.enum(["bkash", "nagad", "rocket", "card", "bank_transfer"]),
});

// ─── Quote ────────────────────────────────────────────────

export const generateQuoteSchema = z.object({
  sourceUrl: z.string().url().optional().or(z.literal("")),
  productCostCny: z.number().positive("Product cost is required"),
  weightKg: z.number().positive("Weight is required").default(0.5),
  shippingMethod: z.enum(["air", "sea", "express"]).default("air"),
  productDetails: z.record(z.unknown()).optional(),
});

// ─── Review ───────────────────────────────────────────────

export const createReviewSchema = z.object({
  productId: z.string().min(1),
  orderId: z.string().optional(),
  rating: z.number().int().min(1, "ন্যূনতম ১ স্টার").max(5, "সর্বোচ্চ ৫ স্টার"),
  comment: z.string().max(2000).optional(),
  images: z.array(z.string().url()).default([]),
});

// ─── Search & Pagination ──────────────────────────────────

export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
});

export const productSearchSchema = paginationSchema.extend({
  search: z.string().max(200).optional(),
  categorySlug: z.string().optional(),
  featured: z.coerce.boolean().optional(),
  sortBy: z.enum(["createdAt", "priceCny", "titleEn"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});
