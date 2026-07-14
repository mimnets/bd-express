import { ShieldCheck, Clock, Headphones, Globe, Banknote, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "নিরাপদ লেনদেন",
    titleEn: "Secure Transactions",
    description: "SSLCommerz-এর মাধ্যমে সকল পেমেন্ট সুরক্ষিত। আপনার টাকা সম্পূর্ণ নিরাপদ।",
  },
  {
    icon: Clock,
    title: "দ্রুত ডেলিভারি",
    titleEn: "Fast Delivery",
    description: "এয়ার শিপিংয়ে মাত্র ৭-১২ দিনে পণ্য পৌঁছে যায় আপনার দোরগোড়ায়।",
  },
  {
    icon: Globe,
    title: "বাংলা + English",
    titleEn: "Bilingual Platform",
    description: "সম্পূর্ণ প্ল্যাটফর্ম বাংলা ও ইংরেজি উভয় ভাষায়। আপনার পছন্দের ভাষা বেছে নিন।",
  },
  {
    icon: Banknote,
    title: "সাশ্রয়ী মূল্য",
    titleEn: "Affordable Pricing",
    description: "মাত্র ৪-১২% সার্ভিস ফি। CNY ১৫ টাকা রেটে। কোনো লুকানো চার্জ নেই।",
  },
  {
    icon: Headphones,
    title: "২৪/৭ সাপোর্ট",
    titleEn: "24/7 Support",
    description: "আমাদের কাস্টমার সাপোর্ট টিম সবসময় আপনার পাশে। ফোন, WhatsApp, Messenger।",
  },
  {
    icon: Star,
    title: "কোয়ালিটি চেক",
    titleEn: "Quality Check",
    description: "চায়নায় আমাদের টিম প্রতিটি পণ্য শিপিংয়ের আগে পরীক্ষা করে নেয়।",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            কেন আমরা
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            BDXpress বেছে নেওয়ার কারণসমূহ
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <Card key={benefit.title} className="text-center hover:shadow-md transition-shadow">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{benefit.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
