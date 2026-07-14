"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { Package } from "lucide-react";

export default function TrackOrderPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <Package className="mx-auto h-12 w-12 text-blue-600" />
        <h1 className="mt-4 text-3xl font-bold text-gray-900">{t("nav.track")}</h1>
        <p className="mt-2 text-gray-500">
          Enter your order number to track your shipment.
        </p>
      </div>

      <div className="mt-8">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Order number (e.g. BDX-2024-0001)"
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
          />
          <button className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700">
            Track
          </button>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-400">
        Need help? Contact us on WhatsApp or Messenger.
      </div>
    </div>
  );
}
