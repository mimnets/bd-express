"use client";

import Link from "next/link";
import { Package } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const sections = [
    {
      titleKey: "footer.services",
      links: [
        { href: "/get-started", label: t("nav.howItWorks") },
        { href: "/products", label: t("nav.products") },
        { href: "/track", label: t("nav.track") },
      ],
    },
    {
      titleKey: "footer.company",
      links: [
        { href: "/about", label: t("nav.howItWorks") },
        { href: "/contact", label: t("cta.contact") },
      ],
    },
    {
      titleKey: "footer.legal",
      links: [
        { href: "/terms", label: t("footer.legal") },
        { href: "/privacy", label: t("footer.legal") },
      ],
    },
  ];

  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
              <Package className="h-6 w-6" />
              <span>BDXpress</span>
            </Link>
            <p className="mt-3 text-sm text-gray-500">{t("footer.tagline")}</p>
          </div>

          {/* Link columns */}
          {sections.map((section) => (
            <div key={section.titleKey}>
              <h3 className="font-semibold text-sm text-gray-900">{t(section.titleKey as never)}</h3>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-500 transition-colors hover:text-blue-600">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} BDXpress. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
