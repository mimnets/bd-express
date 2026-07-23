"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="bg-rose-600 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("cta.title")}
          </h2>
          <p className="mt-4 text-lg text-rose-100">{t("cta.subtitle")}</p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/get-started">
              <Button
                size="lg"
                className="bg-white px-8 text-base font-semibold text-rose-600 shadow-lg hover:bg-rose-50"
              >
                {t("cta.button")} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-rose-300 px-8 text-base text-white hover:bg-rose-700"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("cta.whatsapp")}
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-rose-200">
            {t("cta.help")}{" "}
            <Link href="/contact" className="font-medium text-white underline underline-offset-2">
              {t("cta.contact")}
            </Link>{" "}
            {t("cta.ready")}
          </p>
        </div>
      </div>
    </section>
  );
}
