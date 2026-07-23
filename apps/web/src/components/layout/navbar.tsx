"use client";

import Link from "next/link";
import { Package } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", key: "home" as const, label: t("nav.home") },
    { href: "/products", key: "products" as const, label: t("nav.products") },
    { href: "/get-started", key: "getStarted" as const, label: t("nav.howItWorks") },
    { href: "/track", key: "track" as const, label: t("nav.track") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-rose-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2 text-xl font-bold text-rose-600">
          <Package className="h-7 w-7" />
          <span>Amdani Xpress</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-rose-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Link href="/login">
            <Button variant="ghost" size="sm">
              {t("nav.login")}
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">{t("nav.signup")}</Button>
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <Link href="/login">
            <Button variant="ghost" size="sm">
              {t("nav.login")}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
