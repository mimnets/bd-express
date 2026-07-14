import Link from "next/link";
import { Package, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Home", labelBn: "হোম" },
  { href: "/products", label: "Products", labelBn: "পণ্য" },
  { href: "/how-it-works", label: "How It Works", labelBn: "কিভাবে কাজ করে" },
  { href: "/pricing", label: "Pricing", labelBn: "মূল্য" },
  { href: "/track", label: "Track Order", labelBn: "অর্ডার ট্র্যাক" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
          <Package className="h-7 w-7" />
          <span>BDXpress</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              {link.labelBn}
            </Link>
          ))}
        </nav>

        {/* Auth buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              লগইন
            </Button>
          </Link>
          <Link href="/get-started">
            <Button size="sm">শুরু করুন</Button>
          </Link>
        </div>

        {/* Mobile menu trigger — simplified for now */}
        <button className="md:hidden p-2 text-gray-600" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
