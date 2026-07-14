import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create admin user
  const adminPassword = await bcrypt.hash("admin123", 10);
  const admin = await prisma.user.upsert({
    where: { phone: "8801811509999" },
    update: {},
    create: {
      phone: "8801811509999",
      email: "admin@bdexpress.com",
      fullName: "Admin",
      password: adminPassword,
      role: "super_admin",
      language: "bn",
    },
  });
  console.log(`  ✓ Admin user created: ${admin.fullName}`);

  // Create categories
  const categories = [
    { nameEn: "Electronics & Gadgets", nameBn: "ইলেকট্রনিক্স ও গ্যাজেটস", slug: "electronics" },
    { nameEn: "Fashion & Apparel", nameBn: "ফ্যাশন ও পোশাক", slug: "fashion" },
    { nameEn: "Shoes", nameBn: "জুতা", slug: "shoes" },
    { nameEn: "Bags & Luggage", nameBn: "ব্যাগ ও লাগেজ", slug: "bags" },
    { nameEn: "Beauty & Personal Care", nameBn: "বিউটি ও পার্সোনাল কেয়ার", slug: "beauty" },
    { nameEn: "Home & Living", nameBn: "হোম ও লিভিং", slug: "home-living" },
    { nameEn: "Jewelry & Accessories", nameBn: "গহনা ও এক্সেসরিজ", slug: "jewelry" },
    { nameEn: "Sports & Outdoors", nameBn: "স্পোর্টস ও আউটডোর", slug: "sports" },
    { nameEn: "Kids & Toys", nameBn: "বাচ্চাদের খেলনা", slug: "kids-toys" },
    { nameEn: "Stationery & Office", nameBn: "স্টেশনারি ও অফিস", slug: "stationery" },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }
  console.log(`  ✓ ${categories.length} categories created`);

  // Create some sample curated products
  const electronicsCategory = await prisma.category.findUnique({ where: { slug: "electronics" } });
  const fashionCategory = await prisma.category.findUnique({ where: { slug: "fashion" } });
  const shoesCategory = await prisma.category.findUnique({ where: { slug: "shoes" } });
  const bagsCategory = await prisma.category.findUnique({ where: { slug: "bags" } });

  const sampleProducts = [
    {
      type: "curated",
      titleEn: "Wireless Bluetooth Earbuds",
      titleBn: "ওয়্যারলেস ব্লুটুথ ইয়ারবাডস",
      priceCny: 45.00,
      priceBdt: 675,
      weightKg: 0.15,
      categoryId: electronicsCategory?.id,
      images: ["/images/products/earbuds.jpg"],
      isFeatured: true,
    },
    {
      type: "curated",
      titleEn: "Smart Watch Fitness Tracker",
      titleBn: "স্মার্ট ওয়াচ ফিটনেস ট্র্যাকার",
      priceCny: 89.00,
      priceBdt: 1335,
      weightKg: 0.25,
      categoryId: electronicsCategory?.id,
      images: ["/images/products/smartwatch.jpg"],
      isFeatured: true,
    },
    {
      type: "curated",
      titleEn: "Men's Casual T-Shirt (Cotton)",
      titleBn: "মেনস ক্যাজুয়াল টি-শার্ট (কটন)",
      priceCny: 12.00,
      priceBdt: 180,
      weightKg: 0.2,
      categoryId: fashionCategory?.id,
      images: ["/images/products/tshirt.jpg"],
      isFeatured: true,
    },
    {
      type: "curated",
      titleEn: "Running Shoes - Lightweight",
      titleBn: "রানিং জুতা - লাইটওয়েট",
      priceCny: 55.00,
      priceBdt: 825,
      weightKg: 0.6,
      categoryId: shoesCategory?.id,
      images: ["/images/products/runningshoes.jpg"],
      isFeatured: true,
    },
    {
      type: "curated",
      titleEn: "Modern Laptop Backpack 40L",
      titleBn: "মডার্ন ল্যাপটপ ব্যাকপ্যাক ৪০লি",
      priceCny: 28.00,
      priceBdt: 420,
      weightKg: 0.5,
      categoryId: bagsCategory?.id,
      images: ["/images/products/backpack.jpg"],
      isFeatured: true,
    },
  ];

  for (const product of sampleProducts) {
    await prisma.product.create({ data: product });
  }
  console.log(`  ✓ ${sampleProducts.length} sample products created`);

  // Create a test customer
  const customerPassword = await bcrypt.hash("customer123", 10);
  const customer = await prisma.user.upsert({
    where: { phone: "8801700000001" },
    update: {},
    create: {
      phone: "8801700000001",
      email: "customer@test.com",
      fullName: "Test Customer",
      password: customerPassword,
      role: "customer",
      language: "bn",
    },
  });
  console.log(`  ✓ Test customer created: ${customer.fullName}`);

  console.log("\n✅ Database seeded successfully!");
  console.log("\n📋 Test Accounts:");
  console.log("  Admin:    8801811509999 / admin123");
  console.log("  Customer: 8801700000001 / customer123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
