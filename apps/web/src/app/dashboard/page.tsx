import Link from "next/link";
import { Package, Clock, CreditCard, ArrowRight, ShoppingBag, Truck, History } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const QUICK_ACTIONS = [
  { href: "/get-started", icon: ShoppingBag, label: "নতুন অর্ডার", labelEn: "New Order", color: "bg-blue-500" },
  { href: "/dashboard/orders", icon: Clock, label: "আমার অর্ডার", labelEn: "My Orders", color: "bg-green-500" },
  { href: "/track", icon: Truck, label: "ট্র্যাক করুন", labelEn: "Track", color: "bg-purple-500" },
  { href: "/products", icon: Package, label: "পণ্য ক্যাটালগ", labelEn: "Catalog", color: "bg-orange-500" },
];

const STATUS_TABS = [
  { status: "all", label: "সব", count: 0 },
  { status: "pending_payment", label: "পেমেন্ট বাকি", count: 0 },
  { status: "processing", label: "প্রসেসিং", count: 0 },
  { status: "in_transit", label: "ট্রানজিটে", count: 0 },
  { status: "delivered", label: "ডেলিভার্ড", count: 0 },
];

export default function DashboardPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">আমার ড্যাশবোর্ড</h1>
          <p className="mt-1 text-sm text-gray-500">আপনার অর্ডার এবং অ্যাকাউন্ট ম্যানেজ করুন</p>
        </div>

        {/* Quick actions */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {QUICK_ACTIONS.map((action) => (
            <Link key={action.href} href={action.href}>
              <Card className="group text-center transition-shadow hover:shadow-md">
                <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${action.color} bg-opacity-10`}>
                  <action.icon className={`h-6 w-6 ${action.color.replace("bg-", "text-")}`} />
                </div>
                <p className="text-sm font-medium text-gray-900">{action.label}</p>
                <p className="text-xs text-gray-400">{action.labelEn}</p>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Orders section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">সাম্প্রতিক অর্ডার</h2>
              <Link href="/dashboard/orders" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                সব দেখুন <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Empty state */}
            <Card className="text-center py-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <History className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">এখনো কোনো অর্ডার নেই</h3>
              <p className="mt-1 text-sm text-gray-500">আপনার প্রথম অর্ডার করতে প্রস্তুত?</p>
              <Link href="/get-started">
                <Button className="mt-4">অর্ডার শুরু করুন</Button>
              </Link>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Account info */}
            <Card>
              <h3 className="font-semibold text-gray-900">অ্যাকাউন্ট</h3>
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                <p className="flex justify-between"><span>মোবাইল</span><span className="font-medium text-gray-900">০১৭XX-XXXXXX</span></p>
                <p className="flex justify-between"><span>মোট অর্ডার</span><span className="font-medium text-gray-900">০</span></p>
                <p className="flex justify-between"><span>সদস্য</span><span className="font-medium text-green-600">ফ্রি</span></p>
              </div>
            </Card>

            {/* Need help */}
            <Card className="bg-blue-50 border-blue-100">
              <h3 className="font-semibold text-blue-900">সাহায্য প্রয়োজন?</h3>
              <p className="mt-2 text-sm text-blue-700">আমাদের টিম ২৪/৭ আপনার জন্য প্রস্তুত।</p>
              <Link href="/contact">
                <Button variant="outline" size="sm" className="mt-3 border-blue-300 text-blue-700">
                  WhatsApp-এ যোগাযোগ
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
