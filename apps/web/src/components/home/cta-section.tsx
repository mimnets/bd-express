import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-blue-600 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            আজই আপনার প্রথম অর্ডার করুন
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            একটি Taobao বা 1688 লিংক দিন, কোটেশন নিন, এবং bKash/Nagad-এ পেমেন্ট করুন।
            বাকিটা আমাদের উপর ছেড়ে দিন।
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/get-started">
              <Button
                size="lg"
                className="bg-white px-8 text-base font-semibold text-blue-600 hover:bg-blue-50 shadow-lg"
              >
                অর্ডার শুরু করুন
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-blue-300 px-8 text-base text-white hover:bg-blue-700"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp-এ যোগাযোগ
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-sm text-blue-200">
            প্রশ্ন আছে?{" "}
            <Link href="/contact" className="font-medium text-white underline underline-offset-2">
              আমাদের সাথে যোগাযোগ করুন
            </Link>{" "}
            — আমরা সাহায্য করতে প্রস্তুত!
          </p>
        </div>
      </div>
    </section>
  );
}
