"use client";

import { Link2, Calculator, CreditCard, Package, Truck, Home } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { icon: Link2, title: t("how.step1.title"), desc: t("how.step1.desc") },
    { icon: Calculator, title: t("how.step2.title"), desc: t("how.step2.desc") },
    { icon: CreditCard, title: t("how.step3.title"), desc: t("how.step3.desc") },
    { icon: Package, title: t("how.step4.title"), desc: t("how.step4.desc") },
    { icon: Truck, title: t("how.step5.title"), desc: t("how.step5.desc") },
    { icon: Home, title: t("how.step6.title"), desc: t("how.step6.desc") },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t("how.title")}</h2>
          <p className="mt-4 text-lg text-gray-500">{t("how.subtitle")}</p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title} className="relative group hover:shadow-md transition-shadow">
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {index + 1}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{step.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
