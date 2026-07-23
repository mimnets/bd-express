"use client";

import { useState } from "react";
import Link from "next/link";
import { Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useLanguage } from "@/i18n/LanguageContext";

export function SignupForm() {
  const { t } = useLanguage();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const formatPhone = (input: string) => {
    if (input.startsWith("01")) return `+880${input.slice(1)}`;
    if (input.startsWith("880")) return `+${input}`;
    if (input.startsWith("+880")) return input;
    return `+880${input}`;
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const supabase = createClient();
      const { error: err } = await supabase.auth.signInWithOtp({
        phone: formatPhone(phone),
        options: { shouldCreateUser: true, data: { full_name: fullName } },
      });
      if (err) setError(err.message);
      else setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center px-4">
        <div className="w-full max-w-sm text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900">{t("auth.otpSent")}</h2>
          <p className="mt-2 text-sm text-gray-500">{t("auth.otpSentMsg")}</p>
          <Link href="/login">
            <Button className="mt-6 w-full">{t("auth.goToLogin")}</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-2xl font-bold text-rose-600"
          >
            <Package className="h-7 w-7" />
            Amdani Xpress
          </Link>
          <h1 className="mt-4 text-xl font-semibold text-gray-900">{t("auth.signupTitle")}</h1>
          <p className="mt-1 text-sm text-gray-500">{t("auth.signupSubtitle")}</p>
        </div>
        {error && <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">{error}</div>}
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              {t("auth.fullName")}
            </label>
            <input
              id="name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm shadow-sm focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
              placeholder={t("auth.namePlaceholder")}
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              {t("auth.phone")}
            </label>
            <div className="mt-1 flex rounded-lg border border-gray-300 shadow-sm focus-within:border-rose-500 focus-within:ring-1 focus-within:ring-rose-500">
              <span className="flex items-center rounded-l-lg border-r border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                +880
              </span>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                placeholder="1XXX-XXXXXX"
                className="block w-full rounded-r-lg border-0 px-3 py-2.5 text-sm focus:outline-none"
                required
                maxLength={11}
              />
            </div>
          </div>
          <Button type="submit" loading={loading} className="w-full">
            {t("auth.sendOtp")}
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          {t("auth.hasAccount")}{" "}
          <Link href="/login" className="font-medium text-rose-600 hover:underline">
            {t("auth.loginLink")}
          </Link>
        </p>
      </div>
    </div>
  );
}
