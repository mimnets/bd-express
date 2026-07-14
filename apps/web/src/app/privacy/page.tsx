export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
      <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-800">1. Information We Collect</h2>
        <p>We collect your name, phone number, email, and shipping address when you place an order. We do not store payment card details.</p>

        <h2 className="text-xl font-semibold text-gray-800">2. How We Use Your Data</h2>
        <p>Your information is used solely to process your orders and provide customer support. We do not sell or share your data with third parties except as required for shipping and payment processing.</p>

        <h2 className="text-xl font-semibold text-gray-800">3. Data Security</h2>
        <p>We use industry-standard encryption to protect your personal data. Payments are processed through SSLCommerz, a PCI-DSS compliant gateway.</p>

        <h2 className="text-xl font-semibold text-gray-800">4. Contact</h2>
        <p>For privacy-related inquiries, contact us at privacy@bdexpress.com.</p>
      </div>
    </div>
  );
}
