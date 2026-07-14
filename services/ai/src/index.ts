// AI Service — Chatbot, automation, content generation
// Phase 2 implementation

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface ChatResponse {
  message: string;
  actions?: Array<{
    type: "track_order" | "get_quote" | "contact_support";
    data?: Record<string, unknown>;
  }>;
}

/**
 * Handle customer chat message — route to appropriate handler or AI
 */
export async function handleChatMessage(
  messages: ChatMessage[],
  context?: { userId?: string; orderId?: string },
): Promise<ChatResponse> {
  // TODO: Phase 2 — Integrate OpenAI/Anthropic API
  // For MVP: return canned responses
  const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";

  if (lastMessage.includes("track") || lastMessage.includes("order")) {
    return {
      message: "আপনার অর্ডার ট্র্যাক করতে আপনার অর্ডার নম্বর দিন।",
      actions: [{ type: "track_order" }],
    };
  }

  if (lastMessage.includes("price") || lastMessage.includes("quote") || lastMessage.includes("কত")) {
    return {
      message: "একটি পণ্যের মূল্য জানতে Taobao বা 1688 এর লিংক দিন।",
      actions: [{ type: "get_quote" }],
    };
  }

  return {
    message: "আমি আপনার সহায়তার জন্য এখানে আছি। আপনি অর্ডার ট্র্যাক করতে পারেন, মূল্য জানতে পারেন, অথবা আমাদের সাপোর্ট টিমের সাথে কথা বলতে পারেন।",
  };
}

/**
 * Generate social media post content
 */
export async function generateSocialPost(
  productTitle: string,
  language: "bn" | "en" = "bn",
): Promise<string> {
  // TODO: Phase 2 — Use AI for content generation
  if (language === "bn") {
    return `🔥 নতুন পন্য: ${productTitle}\n\nঅর্ডার করুন এখনই! 🚀\n\n#BDXpress #ChinaImport #Bangladesh`;
  }
  return `🔥 New Product: ${productTitle}\n\nOrder now! 🚀\n\n#BDXpress #ChinaImport #Bangladesh`;
}
