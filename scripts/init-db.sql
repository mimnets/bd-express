-- BDXpress Database Schema
-- Run this in Supabase SQL Editor:
-- https://supabase.com/dashboard/project/uyyrwizseaowphfmppen/sql/new

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─── Users ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS "users" (
    "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    "email" TEXT UNIQUE,
    "phone" TEXT UNIQUE NOT NULL,
    "password" TEXT,
    "fullName" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "role" TEXT NOT NULL DEFAULT 'customer',
    "language" TEXT NOT NULL DEFAULT 'bn',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ─── Addresses ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS "addresses" (
    "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    "userId" TEXT NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "label" TEXT,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "streetAddress" TEXT NOT NULL,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS "addresses_userId_idx" ON "addresses"("userId");

-- ─── Categories ───────────────────────────────────────
CREATE TABLE IF NOT EXISTS "categories" (
    "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    "nameEn" TEXT NOT NULL,
    "nameBn" TEXT,
    "slug" TEXT UNIQUE NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,
    "parentId" TEXT REFERENCES "categories"("id"),
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS "categories_parentId_idx" ON "categories"("parentId");
CREATE INDEX IF NOT EXISTS "categories_slug_idx" ON "categories"("slug");

-- ─── Products ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS "products" (
    "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    "type" TEXT NOT NULL DEFAULT 'curated',
    "sourcePlatform" TEXT NOT NULL DEFAULT 'curated',
    "sourceUrl" TEXT,
    "sourceProductId" TEXT,
    "titleEn" TEXT NOT NULL,
    "titleBn" TEXT,
    "description" TEXT,
    "images" JSONB NOT NULL DEFAULT '[]',
    "priceCny" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "priceBdt" DECIMAL(12,2),
    "weightKg" DECIMAL(8,2),
    "categoryId" TEXT REFERENCES "categories"("id"),
    "supplierInfo" JSONB,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "stockQuantity" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS "products_type_idx" ON "products"("type");
CREATE INDEX IF NOT EXISTS "products_sourcePlatform_idx" ON "products"("sourcePlatform");
CREATE INDEX IF NOT EXISTS "products_categoryId_idx" ON "products"("categoryId");
CREATE INDEX IF NOT EXISTS "products_createdAt_idx" ON "products"("createdAt");

-- ─── Orders ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS "orders" (
    "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    "orderNumber" TEXT UNIQUE NOT NULL,
    "userId" TEXT NOT NULL REFERENCES "users"("id"),
    "status" TEXT NOT NULL DEFAULT 'quoted',
    "productDetail" JSONB,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "totalProductCostCny" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "serviceFeeBdt" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "shippingFeeBdt" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "customsDutyBdt" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "grandTotalBdt" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "shippingMethod" TEXT,
    "trackingNumber" TEXT,
    "notes" TEXT,
    "isUrgent" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS "orders_userId_idx" ON "orders"("userId");
CREATE INDEX IF NOT EXISTS "orders_status_idx" ON "orders"("status");
CREATE INDEX IF NOT EXISTS "orders_createdAt_idx" ON "orders"("createdAt");
CREATE INDEX IF NOT EXISTS "orders_orderNumber_idx" ON "orders"("orderNumber");

-- ─── Order Items ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS "order_items" (
    "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    "orderId" TEXT NOT NULL REFERENCES "orders"("id") ON DELETE CASCADE,
    "productId" TEXT REFERENCES "products"("id"),
    "nameEn" TEXT NOT NULL,
    "nameBn" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "priceCny" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "priceBdt" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "imageUrl" TEXT,
    "variant" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS "order_items_orderId_idx" ON "order_items"("orderId");

-- ─── Order Status Log ─────────────────────────────────
CREATE TABLE IF NOT EXISTS "order_status_logs" (
    "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    "orderId" TEXT NOT NULL REFERENCES "orders"("id") ON DELETE CASCADE,
    "fromStatus" TEXT,
    "toStatus" TEXT NOT NULL,
    "note" TEXT,
    "changedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS "order_status_logs_orderId_idx" ON "order_status_logs"("orderId");
CREATE INDEX IF NOT EXISTS "order_status_logs_createdAt_idx" ON "order_status_logs"("createdAt");

-- ─── Payments ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS "payments" (
    "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    "orderId" TEXT NOT NULL REFERENCES "orders"("id"),
    "userId" TEXT NOT NULL REFERENCES "users"("id"),
    "amountBdt" DECIMAL(12,2) NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "transactionId" TEXT,
    "gatewayResponse" JSONB,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "verifiedBy" TEXT,
    "verifiedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS "payments_orderId_idx" ON "payments"("orderId");
CREATE INDEX IF NOT EXISTS "payments_transactionId_idx" ON "payments"("transactionId");

-- ─── Shipments ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS "shipments" (
    "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    "orderId" TEXT NOT NULL REFERENCES "orders"("id"),
    "trackingNumber" TEXT UNIQUE NOT NULL,
    "carrier" TEXT NOT NULL,
    "originWarehouse" TEXT NOT NULL DEFAULT 'Guangzhou, China',
    "destinationCity" TEXT NOT NULL,
    "estimatedDelivery" TIMESTAMP(3),
    "actualDelivery" TIMESTAMP(3),
    "weightKg" DECIMAL(8,2),
    "shippingCostCny" DECIMAL(12,2),
    "statusUpdates" JSONB NOT NULL DEFAULT '[]',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS "shipments_orderId_idx" ON "shipments"("orderId");
CREATE INDEX IF NOT EXISTS "shipments_trackingNumber_idx" ON "shipments"("trackingNumber");

-- ─── Quotes ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS "quotes" (
    "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    "userId" TEXT NOT NULL REFERENCES "users"("id"),
    "sourceUrl" TEXT,
    "productDetails" JSONB,
    "productCostCny" DECIMAL(12,2) NOT NULL,
    "productCostBdt" DECIMAL(12,2) NOT NULL,
    "serviceFeeBdt" DECIMAL(12,2) NOT NULL,
    "shippingFeeBdt" DECIMAL(12,2) NOT NULL,
    "customsBdt" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "grandTotalBdt" DECIMAL(12,2) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS "quotes_userId_idx" ON "quotes"("userId");
CREATE INDEX IF NOT EXISTS "quotes_createdAt_idx" ON "quotes"("createdAt");

-- ─── Reviews ──────────────────────────────────────────
CREATE TABLE IF NOT EXISTS "reviews" (
    "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    "userId" TEXT NOT NULL REFERENCES "users"("id"),
    "productId" TEXT NOT NULL DEFAULT '',
    "orderId" TEXT,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "images" JSONB NOT NULL DEFAULT '[]',
    "isApproved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS "reviews_productId_idx" ON "reviews"("productId");
CREATE INDEX IF NOT EXISTS "reviews_userId_idx" ON "reviews"("userId");

-- ─── Seed Data ─────────────────────────────────────────

-- Create admin user (password: admin123, bcrypt hashed)
-- Note: This is just for initial setup. Change password after first login.
-- Use Supabase Auth for actual authentication (phone OTP).
INSERT INTO "users" ("id", "phone", "email", "fullName", "role", "language", "updatedAt") VALUES
  ('clq0000000000000000000001', '8801811509999', 'admin@bdexpress.com', 'Admin', 'super_admin', 'bn', CURRENT_TIMESTAMP),
  ('clq0000000000000000000002', '8801700000001', 'customer@test.com', 'Test Customer', 'customer', 'bn', CURRENT_TIMESTAMP)
ON CONFLICT (phone) DO NOTHING;

-- Create categories
INSERT INTO "categories" ("nameEn", "nameBn", "slug") VALUES
  ('Electronics & Gadgets', 'ইলেকট্রনিক্স ও গ্যাজেটস', 'electronics'),
  ('Fashion & Apparel', 'ফ্যাশন ও পোশাক', 'fashion'),
  ('Shoes', 'জুতা', 'shoes'),
  ('Bags & Luggage', 'ব্যাগ ও লাগেজ', 'bags'),
  ('Beauty & Personal Care', 'বিউটি ও পার্সোনাল কেয়ার', 'beauty'),
  ('Home & Living', 'হোম ও লিভিং', 'home-living'),
  ('Jewelry & Accessories', 'গহনা ও এক্সেসরিজ', 'jewelry'),
  ('Sports & Outdoors', 'স্পোর্টস ও আউটডোর', 'sports'),
  ('Kids & Toys', 'বাচ্চাদের খেলনা', 'kids-toys'),
  ('Stationery & Office', 'স্টেশনারি ও অফিস', 'stationery')
ON CONFLICT (slug) DO NOTHING;

-- Seed sample products
DO $$
DECLARE
  electronics_id TEXT;
  fashion_id TEXT;
  shoes_id TEXT;
  bags_id TEXT;
BEGIN
  SELECT id INTO electronics_id FROM "categories" WHERE slug = 'electronics';
  SELECT id INTO fashion_id FROM "categories" WHERE slug = 'fashion';
  SELECT id INTO shoes_id FROM "categories" WHERE slug = 'shoes';
  SELECT id INTO bags_id FROM "categories" WHERE slug = 'bags';

  INSERT INTO "products" ("type", "titleEn", "titleBn", "priceCny", "priceBdt", "weightKg", "categoryId", "images", "isFeatured") VALUES
    ('curated', 'Wireless Bluetooth Earbuds', 'ওয়্যারলেস ব্লুটুথ ইয়ারবাডস', 45, 675, 0.15, electronics_id, '["/images/products/earbuds.jpg"]', true),
    ('curated', 'Smart Watch Fitness Tracker', 'স্মার্ট ওয়াচ ফিটনেস ট্র্যাকার', 89, 1335, 0.25, electronics_id, '["/images/products/smartwatch.jpg"]', true),
    ('curated', 'Men''s Casual T-Shirt (Cotton)', 'মেনস ক্যাজুয়াল টি-শার্ট (কটন)', 12, 180, 0.2, fashion_id, '["/images/products/tshirt.jpg"]', true),
    ('curated', 'Running Shoes - Lightweight', 'রানিং সুজ - লাইটওয়েট', 55, 825, 0.6, shoes_id, '["/images/products/shoes.jpg"]', true),
    ('curated', 'Modern Laptop Backpack 40L', 'মডার্ন ল্যাপটপ ব্যাকপ্যাক ৪০লি', 28, 420, 0.5, bags_id, '["/images/products/backpack.jpg"]', true);
END $$;
