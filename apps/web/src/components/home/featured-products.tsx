import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Static featured products — will be replaced with DB query later
const FEATURED_PRODUCTS = [
  {
    id: "1",
    title: "Wireless Bluetooth Earbuds",
    titleBn: "ওয়্যারলেস ব্লুটুথ ইয়ারবাডস",
    priceBdt: 675,
    priceCny: 45,
    image: "/products/earbuds.jpg",
    category: "ইলেকট্রনিক্স",
  },
  {
    id: "2",
    title: "Smart Watch Fitness Tracker",
    titleBn: "স্মার্ট ওয়াচ ফিটনেস ট্র্যাকার",
    priceBdt: 1335,
    priceCny: 89,
    image: "/products/smartwatch.jpg",
    category: "ইলেকট্রনিক্স",
  },
  {
    id: "3",
    title: "Men's Casual Cotton T-Shirt",
    titleBn: "মেনস ক্যাজুয়াল কটন টি-শার্ট",
    priceBdt: 180,
    priceCny: 12,
    image: "/products/tshirt.jpg",
    category: "ফ্যাশন",
  },
  {
    id: "4",
    title: "Running Shoes Lightweight",
    titleBn: "রানিং সুজ লাইটওয়েট",
    priceBdt: 825,
    priceCny: 55,
    image: "/products/shoes.jpg",
    category: "জুতা",
  },
];

export function FeaturedProducts() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              জনপ্রিয় পণ্য
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              আমাদের কিউরেটেড ক্যাটালগ থেকে জনপ্রিয় পণ্যসমূহ
            </p>
          </div>
          <Link href="/products" className="hidden sm:flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
            সব পণ্য দেখুন <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PRODUCTS.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="group h-full overflow-hidden p-0 transition-shadow hover:shadow-md">
                {/* Product image placeholder */}
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                  <ShoppingBag className="h-16 w-16 text-blue-300" />
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-blue-600">{product.category}</p>
                  <h3 className="mt-1 font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {product.titleBn}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-lg font-bold text-gray-900">
                      ৳{product.priceBdt.toLocaleString("en-BD")}
                    </span>
                    <span className="text-sm text-gray-400">
                      ¥{product.priceCny}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Mobile view all link */}
        <div className="mt-8 text-center sm:hidden">
          <Link href="/products">
            <Button variant="outline" size="lg">
              সব পণ্য দেখুন <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
