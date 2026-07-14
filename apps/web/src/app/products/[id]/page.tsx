import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Product #${id}`,
    description: "Product details and pricing",
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/products"
          className="mb-6 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          পণ্য ক্যাটালগে ফিরুন
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product image */}
          <div className="flex h-80 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 lg:h-96">
            <ShoppingBag className="h-24 w-24 text-blue-300" />
          </div>

          {/* Product info */}
          <div>
            <p className="text-sm font-medium text-blue-600">ইলেকট্রনিক্স</p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">পণ্যের নাম</h1>
            <p className="mt-1 text-gray-400">Product Name (English)</p>

            {/* Price */}
            <div className="mt-6 rounded-xl bg-gray-50 p-6">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-gray-900">৳১,৩৩৫</span>
                <span className="text-lg text-gray-400">¥89</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                মূল্যের মধ্যে পণ্যের দাম, সার্ভিস ফি, ও শিপিং চার্জ অন্তর্ভুক্ত
              </p>
            </div>

            {/* Shipping estimate */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { method: "এয়ার", days: "৭-১২ দিন", price: "৳৯৬০" },
                { method: "সি", days: "২০-৪০ দিন", price: "৳৩৬০" },
                { method: "এক্সপ্রেস", days: "৫-৮ দিন", price: "৳১,৫৬০" },
              ].map((opt) => (
                <Card key={opt.method} padding="sm" className="text-center">
                  <div className="text-sm font-semibold text-gray-900">{opt.method}</div>
                  <div className="mt-0.5 text-xs text-gray-400">{opt.days}</div>
                  <div className="mt-1 text-sm font-medium text-blue-600">{opt.price}</div>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 flex gap-3">
              <Link href={`/get-started?product=${id}`}>
                <Button size="lg" className="px-8">অর্ডার করতে কোটেশন নিন</Button>
              </Link>
              <Button variant="outline" size="lg">
                WhatsApp
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex gap-6 border-t border-gray-100 pt-6">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Shield className="h-4 w-4 text-green-500" />
                কোয়ালিটি চেকড
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Truck className="h-4 w-4 text-blue-500" />
                দোরগোড়ায় ডেলিভারি
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
