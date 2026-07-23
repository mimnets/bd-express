"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useLanguage } from "@/i18n/LanguageContext";

export function LoginForm() {
  const { t } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/dashboard";
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const supabase = createClient();

  const formatPhone = (input: string) => {
    if (input.startsWith("01")) return `+880${input.slice(1)}`;
    if (input.startsWith("880")) return `+${input}`;
    if (input.startsWith("+880")) return input;
    return `+880${input}`;
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error: err } = await supabase.auth.signInWithOtp({
      phone: formatPhone(phone),
      options: { shouldCreateUser: false },
    });
    if (err) setError(err.message);
    else setOtpSent(true);
    setLoading(false);
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error: err } = await supabase.auth.verifyOtp({
      phone: formatPhone(phone),
      token: otp,
      type: "sms",
    });
    if (err) setError(err.message);
    else {
      router.push(redirectTo);
      router.refresh();
    }
    setLoading(false);
  };

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
          <h1 className="mt-4 text-xl font-semibold text-gray-900">
            {otpSent ? t("auth.verifyTitle") : t("auth.loginTitle")}
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            {otpSent ? t("auth.verifySubtitle") : t("auth.loginSubtitle")}
          </p>
        </div>
        {error && <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">{error}</div>}
        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
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
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                {t("auth.verifyTitle")}
              </label>
              <input
                id="otp"
                type="text"
                inputMode="numeric"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                placeholder="XXXXXX"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-center text-2xl tracking-widest shadow-sm focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                required
                maxLength={6}
              />
            </div>
            <Button type="submit" loading={loading} className="w-full">
              {t("auth.verify")}
            </Button>
            <button
              type="button"
              onClick={() => {
                setOtpSent(false);
                setOtp("");
                setError("");
              }}
              className="w-full text-center text-sm text-rose-600 hover:underline"
            >
              {t("auth.resend")}
            </button>
          </form>
        )}
        <p className="mt-6 text-center text-sm text-gray-500">
          {t("auth.noAccount")}{" "}
          <Link href="/signup" className="font-medium text-rose-600 hover:underline">
            {t("auth.register")}
          </Link>
        </p>
      </div>
    </div>
  );
}
