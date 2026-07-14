"use client";

import { Phone, MessageCircle, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
      <p className="mt-2 text-gray-500">We&apos;re here 24/7 to help you.</p>

      <div className="mt-8 space-y-6">
        <div className="flex items-center gap-4 rounded-lg border p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
            <MessageCircle className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h3 className="font-medium">WhatsApp</h3>
            <p className="text-sm text-gray-500">Quickest response time</p>
          </div>
          <a
            href="https://wa.me/8801811509999"
            className="ml-auto rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
          >
            Chat
          </a>
        </div>

        <div className="flex items-center gap-4 rounded-lg border p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <Phone className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium">Phone</h3>
            <p className="text-sm text-gray-500">+880 1811-509999</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-lg border p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
            <Mail className="h-5 w-5 text-gray-600" />
          </div>
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-sm text-gray-500">support@bdexpress.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
