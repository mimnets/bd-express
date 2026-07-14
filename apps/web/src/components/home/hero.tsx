import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            🇧🇩 বাংলাদেশের #১ চায়না সোর্সিং প্ল্যাটফর্ম
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            চায়না থেকে পণ্য{" "}
            <span className="text-blue-600">সরাসরি আপনার দোরগোড়ায়</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
            Taobao, 1688, Alibaba — যেকোনো চায়নিজ প্ল্যাটফর্ম থেকে পণ্য অর্ডার করুন।
            পেমেন্ট করুন bKash, Nagad বা কার্ডে। আমরা পৌঁছে দেব আপনার ঠিকানায়।
          </p>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-green-500" />
              নিরাপদ পেমেন্ট
            </span>
            <span className="flex items-center gap-1.5">
              <Truck className="h-4 w-4 text-blue-500" />
              ডোর-টু-ডোর ডেলিভারি
            </span>
            <span className="flex items-center gap-1.5">
              <Banknote className="h-4 w-4 text-green-500" />
              bKash/Nagad সাপোর্ট
            </span>
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/get-started">
              <Button size="lg" className="group px-8 text-base">
                অর্ডার শুরু করুন
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="outline" size="lg" className="px-8 text-base">
                কিভাবে কাজ করে
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { value: "৫০০+", label: "সফল অর্ডার" },
              { value: "৭-১২দিন", label: "এয়ার ডেলিভারি" },
              { value: "৳১৫/=CNY", label: "এক্সচেঞ্জ রেট" },
              { value: "২৪/৭", label: "কাস্টমার সাপোর্ট" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
