// Payment service abstraction
// Placeholder — SSLCommerz integration will go here

export interface PaymentInitParams {
  orderId: string;
  amountBdt: number;
  customerPhone: string;
  customerEmail?: string;
  customerName: string;
}

export interface PaymentResult {
  success: boolean;
  transactionId?: string;
  gatewayUrl?: string;
  error?: string;
}

export async function initiatePayment(
  params: PaymentInitParams,
): Promise<PaymentResult> {
  // TODO: Implement SSLCommerz API integration
  // See: https://developer.sslcommerz.com/
  console.log("Payment initiated:", params);
  return {
    success: true,
    transactionId: `TXN-${Date.now()}`,
    gatewayUrl: "https://sandbox.sslcommerz.com/redirect",
  };
}

export async function verifyPayment(
  transactionId: string,
): Promise<boolean> {
  // TODO: Implement payment verification
  console.log("Verifying payment:", transactionId);
  return true;
}
