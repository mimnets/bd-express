import Link from "next/link";
import { ArrowLeft, Package } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/dashboard"
          className="mb-6 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          ড্যাশবোর্ডে ফিরুন
        </Link>

        <h1 className="text-2xl font-bold text-gray-900">আমার অর্ডারসমূহ</h1>
        <p className="mt-1 text-sm text-gray-500">আপনার সকল অর্ডারের তালিকা</p>

        {/* Status filter tabs */}
        <div className="mt-6 flex flex-wrap gap-2">
          {["সব", "পেমেন্ট বাকি", "প্রসেসিং", "ট্রানজিটে", "ডেলিভার্ড"].map((tab) => (
            <button
              key={tab}
              className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-600 transition-colors hover:border-blue-300 hover:text-blue-600"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Empty state */}
        <Card className="mt-8 py-16 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Package className="h-10 w-10 text-gray-400" />
          </div>
          <h2 className="mt-6 text-xl font-semibold text-gray-900">কোনো অর্ডার পাওয়া যায়নি</h2>
          <p className="mt-2 text-gray-500">
            আপনার এখনো কোনো অর্ডার নেই। প্রথম অর্ডার করতে ক্লিক করুন।
          </p>
          <Link
            href="/get-started"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            প্রথম অর্ডার করুন
          </Link>
        </Card>
      </div>
    </div>
  );
}
