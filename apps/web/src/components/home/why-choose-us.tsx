"use client";

import { ShieldCheck, Clock, Headphones, Globe, Banknote, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";

export function WhyChooseUs() {
  const { t } = useLanguage();

  const benefits = [
    { icon: ShieldCheck, title: t("why.secure.title"), desc: t("why.secure.desc") },
    { icon: Clock, title: t("why.fast.title"), desc: t("why.fast.desc") },
    { icon: Globe, title: t("why.bilingual.title"), desc: t("why.bilingual.desc") },
    { icon: Banknote, title: t("why.affordable.title"), desc: t("why.affordable.desc") },
    { icon: Headphones, title: t("why.support.title"), desc: t("why.support.desc") },
    { icon: Star, title: t("why.qc.title"), desc: t("why.qc.desc") },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t("why.title")}</h2>
          <p className="mt-4 text-lg text-gray-500">{t("why.subtitle")}</p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="text-center hover:shadow-md transition-shadow">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{benefit.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{benefit.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
