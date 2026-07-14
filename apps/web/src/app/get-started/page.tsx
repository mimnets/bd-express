"use client";

import { useState } from "react";
import Link from "next/link";
import { Link2, Calculator, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function GetStartedPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<null | {
    productCostBdt: number;
    serviceFeeBdt: number;
    shippingFeeBdt: number;
    customsEstimateBdt: number;
    grandTotalBdt: number;
  }>(null);

  const handleGetQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call — will be replaced with real china-api fetch
    await new Promise((r) => setTimeout(r, 1500));

    // Mock quote calculation
    const productCostCny = 89;
    const exchangeRate = 15;
    const productCostBdt = productCostCny * exchangeRate;
    const serviceFeeBdt = Math.round(productCostBdt * 0.08);
    const shippingFeeBdt = 960;
    const customsEstimateBdt = Math.round(productCostBdt * 0.25);

    setQuote({
      productCostBdt,
      serviceFeeBdt,
      shippingFeeBdt,
      customsEstimateBdt,
      grandTotalBdt: productCostBdt + serviceFeeBdt + shippingFeeBdt + customsEstimateBdt,
    });
    setLoading(false);
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
            <Link2 className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="mt-6 text-3xl font-bold text-gray-900">অর্ডার শুরু করুন</h1>
          <p className="mt-2 text-gray-500">
            Taobao, 1688, বা Alibaba পণ্যের লিংক দিন এবং সাথে সাথে কোটেশন নিন
          </p>
        </div>

        {/* URL Input */}
        <form onSubmit={handleGetQuote} className="mt-10">
          <Card className="overflow-hidden">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Link2 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://item.taobao.com/item.htm?id=..."
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <Button type="submit" loading={loading} size="lg" className="px-8">
                <Calculator className="mr-2 h-5 w-5" />
                কোটেশন নিন
              </Button>
            </div>
            <p className="mt-2 text-xs text-gray-400">
              সাপোর্টেড: Taobao, Tmall, 1688.com — পণ্যের লিংক কপি করে পেস্ট করুন
            </p>
          </Card>
        </form>

        {/* Quote Result */}
        {quote && (
          <Card className="mt-8">
            <h2 className="text-xl font-bold text-gray-900">আপনার কোটেশন</h2>
            <p className="mt-1 text-sm text-gray-500">সকল মূল্য বাংলাদেশী টাকায় (BDT)</p>

            <div className="mt-6 space-y-3">
              {[
                { label: "পণ্যের মূল্য (CNY → BDT)", value: quote.productCostBdt, hint: "¥89 × ৳১৫/CNY" },
                { label: "সার্ভিস ফি (৮%)", value: quote.serviceFeeBdt },
                { label: "শিপিং চার্জ (এয়ার)", value: quote.shippingFeeBdt, hint: "প্রতি কেজি $৮" },
                { label: "কাস্টমস ডিউটি (আনুমানিক)", value: quote.customsEstimateBdt, hint: "~২৫%" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div>
                    <span className="text-sm text-gray-600">{item.label}</span>
                    {item.hint && <span className="ml-2 text-xs text-gray-400">({item.hint})</span>}
                  </div>
                  <span className="font-medium text-gray-900">৳{item.value.toLocaleString("en-BD")}</span>
                </div>
              ))}

              {/* Total */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-lg font-bold text-gray-900">সর্বমোট</span>
                <span className="text-2xl font-bold text-blue-600">
                  ৳{quote.grandTotalBdt.toLocaleString("en-BD")}
                </span>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-blue-50 p-3 flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
              <p className="text-sm text-blue-800">
                এটি আনুমানিক কোটেশন। ফাইনাল মূল্য পণ্যের ওজন ও শিপিং মেথডের উপর নির্ভর করবে।
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              <Link href="/signup">
                <Button size="lg" className="px-8">
                  অর্ডার কনফার্ম করুন <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                WhatsApp-এ শেয়ার করুন
              </Button>
            </div>
          </Card>
        )}

        {/* Manual option */}
        {!quote && (
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              লিংক নেই?{" "}
              <Link href="/products" className="font-medium text-blue-600 hover:underline">
                আমাদের ক্যাটালগ থেকে পণ্য বাছাই করুন
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
