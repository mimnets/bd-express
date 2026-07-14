import Link from "next/link";
import { ArrowLeft, Package, MapPin, Clock, Truck, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface OrderDetailProps {
  params: Promise<{ id: string }>;
}

const ORDER_STATUS_STEPS = [
  { key: "quoted", label: "কোটেশন তৈরি", icon: CheckCircle },
  { key: "pending_payment", label: "পেমেন্ট অপেক্ষায়", icon: Clock },
  { key: "paid", label: "পেমেন্ট সম্পন্ন", icon: CheckCircle },
  { key: "purchasing", label: "পণ্য ক্রয়", icon: Package },
  { key: "in_warehouse", label: "চায়না ওয়ারহাউস", icon: MapPin },
  { key: "qc_done", label: "কোয়ালিটি চেক", icon: CheckCircle },
  { key: "ready_for_shipping", label: "শিপিংয়ের জন্য প্রস্তুত", icon: Package },
  { key: "in_transit", label: "ট্রানজিটে", icon: Truck },
  { key: "customs", label: "কাস্টমস ক্লিয়ারেন্স", icon: Clock },
  { key: "in_bd", label: "বাংলাদেশে পৌঁছেছে", icon: MapPin },
  { key: "out_for_delivery", label: "ডেলিভারির জন্য বের হয়েছে", icon: Truck },
  { key: "delivered", label: "ডেলিভারি সম্পন্ন", icon: CheckCircle },
];

export default async function OrderDetailPage({ params }: OrderDetailProps) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/dashboard/orders"
          className="mb-6 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          অর্ডার তালিকায় ফিরুন
        </Link>

        {/* Order header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">অর্ডার #{id}</h1>
            <p className="mt-1 text-sm text-gray-500">অর্ডারের বিস্তারিত তথ্য</p>
          </div>
          <span className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
            প্রসেসিং
          </span>
        </div>

        {/* Status timeline */}
        <Card className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900">অর্ডার স্ট্যাটাস</h2>
          <div className="mt-6 space-y-0">
            {ORDER_STATUS_STEPS.map((step, index) => {
              const isCompleted = index < 3; // Mock: first 3 steps done
              const isCurrent = index === 3; // Mock: 4th is current
              return (
                <div key={step.key} className="flex gap-4">
                  {/* Line + dot */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        isCompleted
                          ? "bg-green-500 text-white"
                          : isCurrent
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      <step.icon className="h-4 w-4" />
                    </div>
                    {index < ORDER_STATUS_STEPS.length - 1 && (
                      <div
                        className={`w-0.5 flex-1 ${isCompleted ? "bg-green-500" : "bg-gray-200"}`}
                      />
                    )}
                  </div>
                  {/* Label */}
                  <div className="pb-8">
                    <p
                      className={`text-sm font-medium ${isCompleted || isCurrent ? "text-gray-900" : "text-gray-400"}`}
                    >
                      {step.label}
                    </p>
                    {(isCompleted || isCurrent) && (
                      <p className="text-xs text-gray-400">
                        {isCurrent ? "বর্তমান স্টেপ" : "১২ জুলাই ২০২৬"}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Order details */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="font-semibold text-gray-900">পণ্যের বিবরণ</h3>
            <div className="mt-4 space-y-2 text-sm">
              <p className="flex justify-between">
                <span className="text-gray-500">পণ্য</span>
                <span>Smart Watch</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-500">পরিমাণ</span>
                <span>১টি</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-500">পণ্যের মূল্য</span>
                <span>¥৮৯</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-500">ওজন</span>
                <span>০.২৫ কেজি</span>
              </p>
            </div>
          </Card>

          <Card>
            <h3 className="font-semibold text-gray-900">মূল্য বিবরণ</h3>
            <div className="mt-4 space-y-2 text-sm">
              <p className="flex justify-between">
                <span className="text-gray-500">পণ্যের মূল্য (BDT)</span>
                <span>৳১,৩৩৫</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-500">সার্ভিস ফি</span>
                <span>৳১০৬</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-500">শিপিং (এয়ার)</span>
                <span>৳৯৬০</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-500">কাস্টমস</span>
                <span>৳৩৩৩</span>
              </p>
              <hr className="my-2" />
              <p className="flex justify-between font-bold text-gray-900">
                <span>সর্বমোট</span>
                <span className="text-blue-600">৳২,৭৩৪</span>
              </p>
            </div>
          </Card>
        </div>

        {/* Tracking */}
        <Card className="mt-6">
          <h3 className="font-semibold text-gray-900">শিপিং তথ্য</h3>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-gray-500">উৎস</p>
                <p className="font-medium text-gray-900">Guangzhou, China</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-gray-500">শিপিং মেথড</p>
                <p className="font-medium text-gray-900">এয়ার ফ্রেইট (৭-১২ দিন)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-gray-500">গন্তব্য</p>
                <p className="font-medium text-gray-900">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
