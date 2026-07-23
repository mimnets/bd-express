export type Language = "en" | "bn";
export const DEFAULT_LANGUAGE: Language = "en";

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "bn", label: "বাংলা", flag: "🇧🇩" },
];

export const translations = {
  // ─── Navbar ─────────────────────────────────────
  "nav.home": { en: "Home", bn: "হোম" },
  "nav.products": { en: "Products", bn: "পণ্য" },
  "nav.howItWorks": { en: "How It Works", bn: "কিভাবে কাজ করে" },
  "nav.pricing": { en: "Pricing", bn: "মূল্য" },
  "nav.track": { en: "Track Order", bn: "অর্ডার ট্র্যাক" },
  "nav.login": { en: "Login", bn: "লগইন" },
  "nav.signup": { en: "Get Started", bn: "শুরু করুন" },
  "nav.dashboard": { en: "Dashboard", bn: "ড্যাশবোর্ড" },
  "nav.logout": { en: "Logout", bn: "লগআউট" },

  // ─── Hero ───────────────────────────────────────
  "hero.badge": {
    en: "🇧🇩 Bangladesh's #1 Import Platform",
    bn: "🇧🇩 বাংলাদেশের #১ আমদানি প্ল্যাটফর্ম",
  },
  "hero.title1": { en: "Source Products from China", bn: "চায়না থেকে পণ্য" },
  "hero.title2": { en: "Delivered to Your Doorstep", bn: "সরাসরি আপনার দোরগোড়ায়" },
  "hero.subtitle": {
    en: "Order from Taobao, 1688, Alibaba — any Chinese platform. Pay with bKash, Nagad, or card. We deliver to your address.",
    bn: "Taobao, 1688, Alibaba — যেকোনো চায়নিজ প্ল্যাটফর্ম থেকে পণ্য অর্ডার করুন। পেমেন্ট করুন bKash, Nagad বা কার্ডে। আমরা পৌঁছে দেব আপনার ঠিকানায়।",
  },
  "hero.securePayment": { en: "Secure Payment", bn: "নিরাপদ পেমেন্ট" },
  "hero.doorDelivery": { en: "Door-to-Door Delivery", bn: "ডোর-টু-ডোর ডেলিভারি" },
  "hero.bkashSupport": { en: "bKash/Nagad Supported", bn: "bKash/Nagad সাপোর্ট" },
  "hero.cta": { en: "Start Ordering", bn: "অর্ডার শুরু করুন" },
  "hero.howItWorks": { en: "How It Works", bn: "কিভাবে কাজ করে" },
  "hero.stat1": { en: "500+", bn: "৫০০+" },
  "hero.stat1Label": { en: "Successful Orders", bn: "সফল অর্ডার" },
  "hero.stat2": { en: "7-12 Days", bn: "৭-১২দিন" },
  "hero.stat2Label": { en: "Air Delivery", bn: "এয়ার ডেলিভারি" },
  "hero.stat3": { en: "৳19/CNY", bn: "৳১৯/=CNY" },
  "hero.stat3Label": { en: "Exchange Rate", bn: "এক্সচেঞ্জ রেট" },
  "hero.stat4": { en: "24/7", bn: "২৪/৭" },
  "hero.stat4Label": { en: "Customer Support", bn: "কাস্টমার সাপোর্ট" },

  // ─── How It Works ───────────────────────────────
  "how.title": { en: "How It Works", bn: "কিভাবে কাজ করে" },
  "how.subtitle": {
    en: "Ordering from China is now as easy as 6 simple steps",
    bn: "চায়না থেকে পণ্য অর্ডার করা এখন ৬টি সহজ ধাপে",
  },
  "how.step1.title": { en: "Submit Link", bn: "লিংক সাবমিট" },
  "how.step1.desc": {
    en: "Paste your Taobao/1688 product link or browse our catalog",
    bn: "Taobao/1688 পণ্যের লিংক পেস্ট করুন অথবা আমাদের ক্যাটালগ থেকে বাছাই করুন",
  },
  "how.step2.title": { en: "Get Quote", bn: "কোটেশন গ্রহণ" },
  "how.step2.desc": {
    en: "See a complete breakdown of product cost, shipping, and customs",
    bn: "পণ্যের দাম, শিপিং, কাস্টমস — সম্পূর্ণ ব্রেকডাউন-সহ কোটেশন দেখুন",
  },
  "how.step3.title": { en: "Pay in BDT", bn: "পেমেন্ট করুন" },
  "how.step3.desc": {
    en: "Pay securely via bKash, Nagad, Rocket, or card",
    bn: "bKash, Nagad, Rocket বা কার্ডে টাকা পরিশোধ করুন",
  },
  "how.step4.title": { en: "China Sourcing", bn: "চায়না থেকে সংগ্রহ" },
  "how.step4.desc": {
    en: "Our China team purchases, inspects, and prepares your items for shipping",
    bn: "আমাদের চায়না টিম পণ্য ক্রয় করে, কোয়ালিটি চেক করে এবং শিপিংয়ের ব্যবস্থা করে",
  },
  "how.step5.title": { en: "Track Shipment", bn: "শিপিং ট্র্যাকিং" },
  "how.step5.desc": {
    en: "Air (7-12 days) or Sea (20-40 days) — get updates at every step",
    bn: "এয়ার (৭-১২দিন) বা সি (২০-৪০দিন) — প্রতিটি স্টেপের আপডেট পান",
  },
  "how.step6.title": { en: "Door Delivery", bn: "দোরগোড়ায় ডেলিভারি" },
  "how.step6.desc": {
    en: "Customs cleared and delivered to your address in Bangladesh",
    bn: "কাস্টমস ক্লিয়ারেন্স-সহ পণ্য পৌঁছে যাবে আপনার ঠিকানায়",
  },

  // ─── Featured Products ──────────────────────────
  "featured.title": { en: "Popular Products", bn: "জনপ্রিয় পণ্য" },
  "featured.subtitle": {
    en: "Featured items from our curated catalog",
    bn: "আমাদের কিউরেটেড ক্যাটালগ থেকে জনপ্রিয় পণ্যসমূহ",
  },
  "featured.viewAll": { en: "View All Products", bn: "সব পণ্য দেখুন" },

  // ─── Why Choose Us ──────────────────────────────
  "why.title": { en: "Why Choose Amdani Xpress", bn: "কেন আমদানি এক্সপ্রেস" },
  "why.subtitle": {
    en: "Reasons to choose Amdani Xpress for your China sourcing needs",
    bn: "Amdani Xpress বেছে নেওয়ার কারণসমূহ",
  },
  "why.secure.title": { en: "Secure Transactions", bn: "নিরাপদ লেনদেন" },
  "why.secure.desc": {
    en: "All payments secured through SSLCommerz. Your money is completely safe.",
    bn: "SSLCommerz-এর মাধ্যমে সকল পেমেন্ট সুরক্ষিত। আপনার টাকা সম্পূর্ণ নিরাপদ।",
  },
  "why.fast.title": { en: "Fast Delivery", bn: "দ্রুত ডেলিভারি" },
  "why.fast.desc": {
    en: "Air shipping delivers in just 7-12 days to your doorstep.",
    bn: "এয়ার শিপিংয়ে মাত্র ৭-১২ দিনে পণ্য পৌঁছে যায় আপনার দোরগোড়ায়।",
  },
  "why.bilingual.title": { en: "English + বাংলা", bn: "বাংলা + English" },
  "why.bilingual.desc": {
    en: "Full platform in both English and Bengali. Choose your preferred language.",
    bn: "সম্পূর্ণ প্ল্যাটফর্ম বাংলা ও ইংরেজি উভয় ভাষায়। আপনার পছন্দের ভাষা বেছে নিন।",
  },
  "why.affordable.title": { en: "Affordable Pricing", bn: "সাশ্রয়ী মূল্য" },
  "why.affordable.desc": {
    en: "Only 4-12% service fee. CNY at ৳19 rate. No hidden charges.",
    bn: "মাত্র ৪-১২% সার্ভিস ফি। CNY ১৯ টাকা রেটে। কোনো লুকানো চার্জ নেই।",
  },
  "why.support.title": { en: "24/7 Support", bn: "২৪/৭ সাপোর্ট" },
  "why.support.desc": {
    en: "Our customer support team is always here for you. Phone, WhatsApp, Messenger.",
    bn: "আমাদের কাস্টমার সাপোর্ট টিম সবসময় আপনার পাশে। ফোন, WhatsApp, Messenger।",
  },
  "why.qc.title": { en: "Quality Check", bn: "কোয়ালিটি চেক" },
  "why.qc.desc": {
    en: "Our China team inspects every product before shipping.",
    bn: "চায়নায় আমাদের টিম প্রতিটি পণ্য শিপিংয়ের আগে পরীক্ষা করে নেয়।",
  },

  // ─── CTA ────────────────────────────────────────
  "cta.title": { en: "Place Your First Order Today", bn: "আজই আপনার প্রথম অর্ডার করুন" },
  "cta.subtitle": {
    en: "Drop a Taobao or 1688 link, get a quote, and pay with bKash/Nagad. Leave the rest to us.",
    bn: "একটি Taobao বা 1688 লিংক দিন, কোটেশন নিন, এবং bKash/Nagad-এ পেমেন্ট করুন। বাকিটা আমাদের উপর ছেড়ে দিন。",
  },
  "cta.button": { en: "Start Ordering", bn: "অর্ডার শুরু করুন" },
  "cta.whatsapp": { en: "Contact on WhatsApp", bn: "WhatsApp-এ যোগাযোগ" },
  "cta.help": { en: "Have questions?", bn: "প্রশ্ন আছে?" },
  "cta.contact": { en: "Contact us", bn: "আমাদের সাথে যোগাযোগ করুন" },
  "cta.ready": { en: "— we're ready to help!", bn: "— আমরা সাহায্য করতে প্রস্তুত!" },

  // ─── Footer ─────────────────────────────────────
  "footer.tagline": {
    en: "China to Bangladesh door-to-door delivery. Order from Taobao, 1688, Alibaba in English and Bengali.",
    bn: "চায়না থেকে বাংলাদেশে দোরগোড়ায় পণ্য ডেলিভারি। Taobao, 1688, Alibaba থেকে পণ্য অর্ডার করুন বাংলায়।",
  },
  "footer.services": { en: "Services", bn: "সেবাসমূহ" },
  "footer.company": { en: "Company", bn: "কোম্পানি" },
  "footer.legal": { en: "Legal", bn: "আইনগত" },
  "footer.rights": { en: "All rights reserved.", bn: "সর্বস্বত্ব সংরক্ষিত।" },

  // ─── Products ───────────────────────────────────
  "products.title": { en: "Product Catalog", bn: "পণ্য ক্যাটালগ" },
  "products.subtitle": {
    en: "Curated products from China — delivered to your doorstep",
    bn: "চায়না থেকে কিউরেটেড পণ্যসমূহ — সরাসরি দোরগোড়ায় ডেলিভারি",
  },
  "products.search": { en: "Search products...", bn: "পণ্য খুঁজুন..." },
  "products.filter": { en: "Filter", bn: "ফিল্টার" },
  "products.back": { en: "Back to Catalog", bn: "পণ্য ক্যাটালগে ফিরুন" },

  // ─── Product Detail ─────────────────────────────
  "product.price": {
    en: "Price includes product cost, service fee, and shipping",
    bn: "মূল্যের মধ্যে পণ্যের দাম, সার্ভিস ফি, ও শিপিং চার্জ অন্তর্ভুক্ত",
  },
  "product.getQuote": { en: "Get Quote to Order", bn: "অর্ডার করতে কোটেশন নিন" },
  "product.whatsapp": { en: "WhatsApp", bn: "WhatsApp" },
  "product.qualityChecked": { en: "Quality Checked", bn: "কোয়ালিটি চেকড" },
  "product.doorDelivery": { en: "Doorstep Delivery", bn: "দোরগোড়ায় ডেলিভারি" },
  "product.shipping.air": { en: "Air", bn: "এয়ার" },
  "product.shipping.sea": { en: "Sea", bn: "সি" },
  "product.shipping.express": { en: "Express", bn: "এক্সপ্রেস" },

  // ─── Quote / Get Started ────────────────────────
  "quote.title": { en: "Start Your Order", bn: "অর্ডার শুরু করুন" },
  "quote.subtitle": {
    en: "Paste a Taobao, 1688, or Alibaba product link and get an instant quote",
    bn: "Taobao, 1688, বা Alibaba পণ্যের লিংক দিন এবং সাথে সাথে কোটেশন নিন",
  },
  "quote.placeholder": {
    en: "https://item.taobao.com/item.htm?id=...",
    bn: "https://item.taobao.com/item.htm?id=...",
  },
  "quote.button": { en: "Get Quote", bn: "কোটেশন নিন" },
  "quote.supported": {
    en: "Supported: Taobao, Tmall, 1688.com — copy and paste product link",
    bn: "সাপোর্টেড: Taobao, Tmall, 1688.com — পণ্যের লিংক কপি করে পেস্ট করুন",
  },
  "quote.yourQuote": { en: "Your Quote", bn: "আপনার কোটেশন" },
  "quote.allBdt": {
    en: "All prices in Bangladeshi Taka (BDT)",
    bn: "সকল মূল্য বাংলাদেশী টাকায় (BDT)",
  },
  "quote.productCost": { en: "Product Cost (CNY → BDT)", bn: "পণ্যের মূল্য (CNY → BDT)" },
  "quote.serviceFee": { en: "Service Fee (8%)", bn: "সার্ভিস ফি (৮%)" },
  "quote.shipping": { en: "Shipping (Air)", bn: "শিপিং চার্জ (এয়ার)" },
  "quote.customs": { en: "Customs Duty (Estimated)", bn: "কাস্টমস ডিউটি (আনুমানিক)" },
  "quote.total": { en: "Grand Total", bn: "সর্বমোট" },
  "quote.disclaimer": {
    en: "This is an estimated quote. Final price depends on actual weight and shipping method.",
    bn: "এটি আনুমানিক কোটেশন। ফাইনাল মূল্য পণ্যের ওজন ও শিপিং মেথডের উপর নির্ভর করবে।",
  },
  "quote.confirm": { en: "Confirm Order", bn: "অর্ডার কনফার্ম করুন" },
  "quote.shareWhatsApp": { en: "Share on WhatsApp", bn: "WhatsApp-এ শেয়ার করুন" },
  "quote.noLink": { en: "Don't have a link?", bn: "লিংক নেই?" },
  "quote.browseCatalog": {
    en: "Browse our catalog instead",
    bn: "আমাদের ক্যাটালগ থেকে পণ্য বাছাই করুন",
  },

  // ─── Auth ───────────────────────────────────────
  "auth.loginTitle": { en: "Login", bn: "লগইন" },
  "auth.loginSubtitle": {
    en: "Login with your mobile number",
    bn: "আপনার মোবাইল নম্বর দিয়ে লগইন করুন",
  },
  "auth.verifyTitle": { en: "Verify OTP", bn: "OTP ভেরিফাই করুন" },
  "auth.verifySubtitle": {
    en: "Enter the 6-digit code sent to your phone",
    bn: "আপনার মোবাইলে পাঠানো কোডটি দিন",
  },
  "auth.phone": { en: "Mobile Number", bn: "মোবাইল নম্বর" },
  "auth.sendOtp": { en: "Send OTP", bn: "OTP পাঠান" },
  "auth.verify": { en: "Verify", bn: "ভেরিফাই করুন" },
  "auth.resend": { en: "Send OTP Again", bn: "আবার OTP পাঠান" },
  "auth.noAccount": { en: "Don't have an account?", bn: "অ্যাকাউন্ট নেই?" },
  "auth.hasAccount": { en: "Already have an account?", bn: "ইতিমধ্যে অ্যাকাউন্ট আছে?" },
  "auth.register": { en: "Register", bn: "রেজিস্ট্রেশন করুন" },
  "auth.loginLink": { en: "Login", bn: "লগইন করুন" },
  "auth.signupTitle": { en: "Registration", bn: "রেজিস্ট্রেশন" },
  "auth.signupSubtitle": {
    en: "Enter your details to create an account",
    bn: "একাউন্ট খুলতে আপনার তথ্য দিন",
  },
  "auth.fullName": { en: "Full Name", bn: "সম্পূর্ণ নাম" },
  "auth.namePlaceholder": { en: "Your name", bn: "আপনার নাম" },
  "auth.otpSent": { en: "OTP Sent!", bn: "OTP পাঠানো হয়েছে!" },
  "auth.otpSentMsg": {
    en: "A verification code has been sent. Use it to login.",
    bn: "একটি ভেরিফিকেশন কোড পাঠানো হয়েছে। কোড দিয়ে লগইন করুন।",
  },
  "auth.goToLogin": { en: "Go to Login Page", bn: "লগইন পেজে যান" },

  // ─── Dashboard ──────────────────────────────────
  "dash.title": { en: "My Dashboard", bn: "আমার ড্যাশবোর্ড" },
  "dash.subtitle": {
    en: "Manage your orders and account",
    bn: "আপনার অর্ডার এবং অ্যাকাউন্ট ম্যানেজ করুন",
  },
  "dash.newOrder": { en: "New Order", bn: "নতুন অর্ডার" },
  "dash.myOrders": { en: "My Orders", bn: "আমার অর্ডার" },
  "dash.track": { en: "Track", bn: "ট্র্যাক করুন" },
  "dash.catalog": { en: "Catalog", bn: "পণ্য ক্যাটালগ" },
  "dash.recentOrders": { en: "Recent Orders", bn: "সাম্প্রতিক অর্ডার" },
  "dash.viewAll": { en: "View All", bn: "সব দেখুন" },
  "dash.noOrders": { en: "No orders yet", bn: "এখনো কোনো অর্ডার নেই" },
  "dash.noOrdersMsg": {
    en: "Ready to place your first order?",
    bn: "আপনার প্রথম অর্ডার করতে প্রস্তুত?",
  },
  "dash.startOrder": { en: "Start Ordering", bn: "অর্ডার শুরু করুন" },
  "dash.account": { en: "Account", bn: "অ্যাকাউন্ট" },
  "dash.mobile": { en: "Mobile", bn: "মোবাইল" },
  "dash.totalOrders": { en: "Total Orders", bn: "মোট অর্ডার" },
  "dash.member": { en: "Member", bn: "সদস্য" },
  "dash.free": { en: "Free", bn: "ফ্রি" },
  "dash.needHelp": { en: "Need Help?", bn: "সাহায্য প্রয়োজন?" },
  "dash.helpMsg": {
    en: "Our team is ready 24/7 for you.",
    bn: "আমাদের টিম ২৪/৭ আপনার জন্য প্রস্তুত。",
  },
  "dash.contactWhatsApp": { en: "Contact on WhatsApp", bn: "WhatsApp-এ যোগাযোগ" },
  "dash.backToDashboard": { en: "Back to Dashboard", bn: "ড্যাশবোর্ডে ফিরুন" },

  // ─── Orders ─────────────────────────────────────
  "orders.title": { en: "My Orders", bn: "আমার অর্ডারসমূহ" },
  "orders.subtitle": { en: "List of all your orders", bn: "আপনার সকল অর্ডারের তালিকা" },
  "orders.all": { en: "All", bn: "সব" },
  "orders.pendingPayment": { en: "Pending Payment", bn: "পেমেন্ট বাকি" },
  "orders.processing": { en: "Processing", bn: "প্রসেসিং" },
  "orders.inTransit": { en: "In Transit", bn: "ট্রানজিটে" },
  "orders.delivered": { en: "Delivered", bn: "ডেলিভার্ড" },
  "orders.empty": { en: "No orders found", bn: "কোনো অর্ডার পাওয়া যায়নি" },
  "orders.emptyMsg": {
    en: "You haven't placed any orders yet.",
    bn: "আপনার এখনো কোনো অর্ডার নেই।",
  },
  "orders.placeFirst": { en: "Place Your First Order", bn: "প্রথম অর্ডার করুন" },
  "orders.backToList": { en: "Back to Orders", bn: "অর্ডার তালিকায় ফিরুন" },
  "orders.detail": { en: "Order Details", bn: "অর্ডারের বিস্তারিত তথ্য" },
  "orders.status": { en: "Order Status", bn: "অর্ডার স্ট্যাটাস" },
  "orders.productInfo": { en: "Product Details", bn: "পণ্যের বিবরণ" },
  "orders.priceBreakdown": { en: "Price Breakdown", bn: "মূল্য বিবরণ" },
  "orders.shippingInfo": { en: "Shipping Information", bn: "শিপিং তথ্য" },
  "orders.origin": { en: "Origin", bn: "উৎস" },
  "orders.destination": { en: "Destination", bn: "গন্তব্য" },
  "orders.shippingMethod": { en: "Shipping Method", bn: "শিপিং মেথড" },

  // ─── Order Status Steps ─────────────────────────
  "status.quoted": { en: "Quote Created", bn: "কোটেশন তৈরি" },
  "status.pending_payment": { en: "Awaiting Payment", bn: "পেমেন্ট অপেক্ষায়" },
  "status.paid": { en: "Payment Complete", bn: "পেমেন্ট সম্পন্ন" },
  "status.purchasing": { en: "Purchasing Product", bn: "পণ্য ক্রয়" },
  "status.in_warehouse": { en: "China Warehouse", bn: "চায়না ওয়ারহাউস" },
  "status.qc_done": { en: "Quality Check Done", bn: "কোয়ালিটি চেক" },
  "status.ready_for_shipping": { en: "Ready for Shipping", bn: "শিপিংয়ের জন্য প্রস্তুত" },
  "status.in_transit": { en: "In Transit", bn: "ট্রানজিটে" },
  "status.customs": { en: "Customs Clearance", bn: "কাস্টমস ক্লিয়ারেন্স" },
  "status.in_bd": { en: "Arrived in Bangladesh", bn: "বাংলাদেশে পৌঁছেছে" },
  "status.out_for_delivery": { en: "Out for Delivery", bn: "ডেলিভারির জন্য বের হয়েছে" },
  "status.delivered": { en: "Delivered", bn: "ডেলিভারি সম্পন্ন" },
  "status.cancelled": { en: "Cancelled", bn: "বাতিল" },
  "status.returned": { en: "Returned", bn: "রিটার্ন" },
} as const;

export type TranslationKey = keyof typeof translations;
