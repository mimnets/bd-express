import Link from "next/link";
import { ArrowLeft, Package, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const STATUS_MAP: Record<string, { label: string; color: string }> = {
  quoted: { label: "কোটেশন", color: "bg-gray-100 text-gray-700" },
  pending_payment: { label: "পেমেন্ট বাকি", color: "bg-yellow-100 text-yellow-700" },
  paid: { label: "পেইড", color: "bg-green-100 text-green-700" },
  purchasing: { label: "ক্রয় প্রক্রিয়ায়", color: "bg-blue-100 text-blue-700" },
  in_warehouse: { label: "চায়না ওয়ারহাউসে", color: "bg-blue-100 text-blue-700" },
  qc_done: { label: "QC সম্পন্ন", color: "bg-blue-100 text-blue-700" },
  ready_for_shipping: { label: "শিপিং রেডি", color: "bg-purple-100 text-purple-700" },
  in_transit: { label: "ট্রানজিটে", color: "bg-purple-100 text-purple-700" },
  customs: { label: "কাস্টমসে", color: "bg-orange-100 text-orange-700" },
  in_bd: { label: "বাংলাদেশে", color: "bg-green-100 text-green-700" },
  out_for_delivery: { label: "ডেলিভারি চলছে", color: "bg-green-100 text-green-700" },
  delivered: { label: "ডেলিভার্ড", color: "bg-green-100 text-green-700" },
  cancelled: { label: "বাতিল", color: "bg-red-100 text-red-700" },
  returned: { label: "রিটার্ন", color: "bg-red-100 text-red-700" },
};

export default function OrdersPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <Link href="/dashboard" className="mb-6 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600">
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
        <Card className="mt-8 text-center py-16">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Package className="h-10 w-10 text-gray-400" />
          </div>
          <h2 className="mt-6 text-xl font-semibold text-gray-900">কোনো অর্ডার পাওয়া যায়নি</h2>
          <p className="mt-2 text-gray-500">
            আপনার এখনো কোনো অর্ডার নেই। প্রথম অর্ডার করতে ক্লিক করুন।
          </p>
          <Link
            href="/get-started"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            প্রথম অর্ডার করুন
          </Link>
        </Card>
      </div>
    </div>
  );
}
