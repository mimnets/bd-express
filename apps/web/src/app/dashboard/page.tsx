"use client";

import Link from "next/link";
import { Package, Clock, ArrowRight, ShoppingBag, Truck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

export default function DashboardPage() {
  const { t } = useLanguage();

  const quickActions = [
    { href: "/get-started", icon: ShoppingBag, label: t("dash.newOrder"), color: "bg-rose-500" },
    { href: "/dashboard/orders", icon: Clock, label: t("dash.myOrders"), color: "bg-green-500" },
    { href: "/track", icon: Truck, label: t("dash.track"), color: "bg-purple-500" },
    { href: "/products", icon: Package, label: t("dash.catalog"), color: "bg-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">{t("dash.title")}</h1>
          <p className="mt-1 text-sm text-gray-500">{t("dash.subtitle")}</p>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {quickActions.map((action) => (
            <Link key={action.href} href={action.href}>
              <Card className="group text-center transition-shadow hover:shadow-md">
                <div
                  className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${action.color} bg-opacity-10`}
                >
                  <action.icon className={`h-6 w-6 ${action.color.replace("bg-", "text-")}`} />
                </div>
                <p className="text-sm font-medium text-gray-900">{action.label}</p>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">{t("dash.recentOrders")}</h2>
              <Link
                href="/dashboard/orders"
                className="flex items-center gap-1 text-sm text-rose-600 hover:underline"
              >
                {t("dash.viewAll")} <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <Card className="py-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <Clock className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{t("dash.noOrders")}</h3>
              <p className="mt-1 text-sm text-gray-500">{t("dash.noOrdersMsg")}</p>
              <Link href="/get-started">
                <Button className="mt-4">{t("dash.startOrder")}</Button>
              </Link>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <h3 className="font-semibold text-gray-900">{t("dash.account")}</h3>
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                <p className="flex justify-between">
                  <span>{t("dash.mobile")}</span>
                  <span className="font-medium text-gray-900">০১৭XX-XXXXXX</span>
                </p>
                <p className="flex justify-between">
                  <span>{t("dash.totalOrders")}</span>
                  <span className="font-medium text-gray-900">০</span>
                </p>
                <p className="flex justify-between">
                  <span>{t("dash.member")}</span>
                  <span className="font-medium text-green-600">{t("dash.free")}</span>
                </p>
              </div>
            </Card>

            <Card className="border-rose-100 bg-rose-50">
              <h3 className="font-semibold text-rose-900">{t("dash.needHelp")}</h3>
              <p className="mt-2 text-sm text-rose-700">{t("dash.helpMsg")}</p>
              <Link href="/contact">
                <Button variant="outline" size="sm" className="mt-3 border-rose-300 text-rose-700">
                  {t("dash.contactWhatsApp")}
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
