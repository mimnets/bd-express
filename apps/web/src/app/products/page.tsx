import type { Metadata } from "next";
import Link from "next/link";
import { Search, ShoppingBag, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Product Catalog",
  description: "Browse our curated catalog of products sourced from China",
};

const CATEGORIES = [
  "ইলেকট্রনিক্স", "ফ্যাশন", "জুতা", "ব্যাগ", "বিউটি",
  "হোম লিভিং", "জুয়েলারি", "স্পোর্টস", "খেলনা", "স্টেশনারি",
];

// Static products — will be replaced with DB/API data
const PRODUCTS = Array.from({ length: 12 }, (_, i) => ({
  id: `${i + 1}`,
  titleEn: ["Wireless Earbuds", "Smart Watch", "Cotton T-Shirt", "Running Shoes", "Laptop Backpack", "USB-C Hub", "Phone Case", "LED Desk Lamp", "Portable Charger", "Bluetooth Speaker", "Yoga Mat", "Sunglasses"][i],
  titleBn: ["ওয়্যারলেস ইয়ারবাডস", "স্মার্ট ওয়াচ", "কটন টি-শার্ট", "রানিং সুজ", "ল্যাপটপ ব্যাকপ্যাক", "USB-C হাব", "ফোন কেস", "LED ডেস্ক ল্যাম্প", "পোর্টেবল চার্জার", "ব্লুটুথ স্পিকার", "যোগ ম্যাট", "সানগ্লাস"][i],
  priceBdt: [675, 1335, 180, 825, 420, 350, 120, 450, 600, 900, 300, 250][i],
  priceCny: [45, 89, 12, 55, 28, 23, 8, 30, 40, 60, 20, 17][i],
  category: ["ইলেকট্রনিক্স", "ইলেকট্রনিক্স", "ফ্যাশন", "জুতা", "ব্যাগ", "ইলেকট্রনিক্স", "ইলেকট্রনিক্স", "হোম লিভিং", "ইলেকট্রনিক্স", "ইলেকট্রনিক্স", "স্পোর্টস", "ফ্যাশন"][i],
}));

export default function ProductsPage() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">পণ্য ক্যাটালগ</h1>
          <p className="mt-2 text-gray-500">চায়না থেকে কিউরেটেড পণ্যসমূহ — সরাসরি দোরগোড়ায় ডেলিভারি</p>
        </div>

        {/* Search + Filter bar */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="পণ্য খুঁজুন..."
              className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            ফিল্টার
          </Button>
        </div>

        {/* Categories */}
        <div className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-600 transition-colors hover:border-blue-300 hover:text-blue-600"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRODUCTS.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="group h-full p-0 transition-shadow hover:shadow-md">
                <div className="flex h-48 items-center justify-center rounded-t-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                  <ShoppingBag className="h-16 w-16 text-blue-300 transition-transform group-hover:scale-110" />
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-blue-600">{product.category}</p>
                  <h3 className="mt-1 font-medium text-gray-900 group-hover:text-blue-600">{product.titleBn}</h3>
                  <p className="mt-0.5 text-xs text-gray-400">{product.titleEn}</p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-lg font-bold text-gray-900">৳{product.priceBdt.toLocaleString("en-BD")}</span>
                    <span className="text-sm text-gray-400">¥{product.priceCny}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
