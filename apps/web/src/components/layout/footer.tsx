import Link from "next/link";
import { Package } from "lucide-react";

const FOOTER_LINKS = {
  services: {
    title: "Services",
    titleBn: "সেবাসমূহ",
    links: [
      { href: "/how-it-works", labelBn: "কিভাবে কাজ করে" },
      { href: "/products", labelBn: "পণ্য ক্যাটালগ" },
      { href: "/pricing", labelBn: "মূল্য তালিকা" },
      { href: "/track", labelBn: "অর্ডার ট্র্যাক" },
    ],
  },
  company: {
    title: "Company",
    titleBn: "কোম্পানি",
    links: [
      { href: "/about", labelBn: "আমাদের সম্পর্কে" },
      { href: "/contact", labelBn: "যোগাযোগ" },
      { href: "/faq", labelBn: "প্রশ্নোত্তর" },
      { href: "/blog", labelBn: "ব্লগ" },
    ],
  },
  legal: {
    title: "Legal",
    titleBn: "আইনগত",
    links: [
      { href: "/terms", labelBn: "শর্তাবলী" },
      { href: "/privacy", labelBn: "গোপনীয়তা নীতি" },
      { href: "/refund", labelBn: "রিফান্ড নীতি" },
    ],
  },
};

export function Footer() {
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
            <p className="mt-3 text-sm text-gray-500">
              চায়না থেকে বাংলাদেশে দোরগোড়ায় পণ্য ডেলিভারি। Taobao, 1688, Alibaba থেকে পণ্য অর্ডার করুন বাংলায়।
            </p>
          </div>

          {/* Link columns */}
          {Object.values(FOOTER_LINKS).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm text-gray-900">{section.titleBn}</h3>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors hover:text-blue-600"
                    >
                      {link.labelBn}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} BDXpress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
