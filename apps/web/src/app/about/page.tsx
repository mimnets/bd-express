"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">About BDXpress</h1>
      <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
        <p>
          BDXpress is a cross-border e-commerce & sourcing platform for Bangladesh. We help you buy products from Chinese wholesale platforms — Taobao, 1688, Alibaba — and deliver them straight to your doorstep.
        </p>
        <p>
          Our team in China handles everything — product purchase, quality inspection, packing, and international shipping. We handle Bangladesh customs clearance so you don&apos;t have to worry about a thing.
        </p>
        <p>
          Pay in BDT via bKash, Nagad, Rocket, or card. No need for international credit cards or Chinese payment methods.
        </p>
      </div>
    </div>
  );
}
