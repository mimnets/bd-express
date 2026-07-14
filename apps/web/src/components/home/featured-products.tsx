"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const FEATURED_PRODUCTS = [
  { id: "1", titleBn: "ওয়্যারলেস ব্লুটুথ ইয়ারবাডস", titleEn: "Wireless Bluetooth Earbuds", priceBdt: 855, priceCny: 45, categoryEn: "Electronics", categoryBn: "ইলেকট্রনিক্স" },
  { id: "2", titleBn: "স্মার্ট ওয়াচ ফিটনেস ট্র্যাকার", titleEn: "Smart Watch Fitness Tracker", priceBdt: 1691, priceCny: 89, categoryEn: "Electronics", categoryBn: "ইলেকট্রনিক্স" },
  { id: "3", titleBn: "মেনস ক্যাজুয়াল কটন টি-শার্ট", titleEn: "Men's Casual Cotton T-Shirt", priceBdt: 228, priceCny: 12, categoryEn: "Fashion", categoryBn: "ফ্যাশন" },
  { id: "4", titleBn: "রানিং সুজ লাইটওয়েট", titleEn: "Running Shoes Lightweight", priceBdt: 1045, priceCny: 55, categoryEn: "Shoes", categoryBn: "জুতা" },
];

export function FeaturedProducts() {
  const { t, language } = useLanguage();

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t("featured.title")}</h2>
            <p className="mt-4 text-lg text-gray-500">{t("featured.subtitle")}</p>
          </div>
          <Link href="/products" className="hidden sm:flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
            {t("featured.viewAll")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PRODUCTS.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="group h-full overflow-hidden p-0 transition-shadow hover:shadow-md">
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                  <ShoppingBag className="h-16 w-16 text-blue-300 transition-transform group-hover:scale-110" />
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-blue-600">{language === "bn" ? product.categoryBn : product.categoryEn}</p>
                  <h3 className="mt-1 font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {language === "bn" ? product.titleBn : product.titleEn}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-lg font-bold text-gray-900">৳{product.priceBdt.toLocaleString("en-BD")}</span>
                    <span className="text-sm text-gray-400">¥{product.priceCny}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link href="/products">
            <Button variant="outline" size="lg">{t("featured.viewAll")} <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
