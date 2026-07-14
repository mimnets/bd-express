export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
      <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-800">1. Service Overview</h2>
        <p>BDXpress acts as a sourcing and logistics intermediary. We purchase products from Chinese suppliers on your behalf and arrange international shipping to Bangladesh.</p>

        <h2 className="text-xl font-semibold text-gray-800">2. Orders & Payments</h2>
        <p>All prices quoted are estimates. Final pricing depends on actual product weight, shipping method, and customs duties. Payment must be made before we begin purchasing on your behalf.</p>

        <h2 className="text-xl font-semibold text-gray-800">3. Shipping & Delivery</h2>
        <p>Delivery timelines are estimates and not guaranteed. We are not liable for delays caused by customs, weather, or carrier issues.</p>

        <h2 className="text-xl font-semibold text-gray-800">4. Returns & Refunds</h2>
        <p>Returns are accepted only for defective or incorrect items within 7 days of delivery. Refunds are processed after the item is returned to our China warehouse.</p>
      </div>
    </div>
  );
}
