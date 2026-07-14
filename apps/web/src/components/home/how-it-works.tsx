import { Link2, Calculator, CreditCard, Package, Truck, Home } from "lucide-react";
import { Card } from "@/components/ui/card";

const STEPS = [
  {
    icon: Link2,
    title: "লিংক সাবমিট",
    titleEn: "Submit Link",
    description: "Taobao/1688 পণ্যের লিংক পেস্ট করুন অথবা আমাদের ক্যাটালগ থেকে বাছাই করুন",
  },
  {
    icon: Calculator,
    title: "কোটেশন গ্রহণ",
    titleEn: "Get Quote",
    description: "পণ্যের দাম, শিপিং, কাস্টমস — সম্পূর্ণ ব্রেকডাউন-সহ কোটেশন দেখুন",
  },
  {
    icon: CreditCard,
    title: "পেমেন্ট করুন",
    titleEn: "Pay in BDT",
    description: "bKash, Nagad, Rocket বা কার্ডে টাকা পরিশোধ করুন",
  },
  {
    icon: Package,
    title: "চায়না থেকে সংগ্রহ",
    titleEn: "China Sourcing",
    description: "আমাদের চায়না টিম পণ্য ক্রয় করে, কোয়ালিটি চেক করে এবং শিপিংয়ের ব্যবস্থা করে",
  },
  {
    icon: Truck,
    title: "শিপিং ট্র্যাকিং",
    titleEn: "Track Shipment",
    description: "এয়ার (৭-১২দিন) বা সি (২০-৪০দিন) — প্রতিটি স্টেপের আপডেট পান",
  },
  {
    icon: Home,
    title: "দোরগোড়ায় ডেলিভারি",
    titleEn: "Door Delivery",
    description: "কাস্টমস ক্লিয়ারেন্স-সহ পণ্য পৌঁছে যাবে আপনার ঠিকানায়",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            কিভাবে কাজ করে
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            চায়না থেকে পণ্য অর্ডার করা এখন ৬টি সহজ ধাপে
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <Card key={step.title} className="relative group hover:shadow-md transition-shadow">
              {/* Step number */}
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {index + 1}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
