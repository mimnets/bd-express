import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BDXpress — Cross-Border Sourcing from China to Bangladesh",
    template: "%s | BDXpress",
  },
  description:
    "Source products from Taobao, 1688, and Alibaba with door-to-door delivery to Bangladesh. Pay in BDT with bKash, Nagad, or card.",
  keywords: [
    "China sourcing",
    "Bangladesh",
    "Taobao",
    "1688",
    "Alibaba",
    "cross-border e-commerce",
    "BDXpress",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
