export const APP_CONFIG = {
  name: "Web4All.in",
  tagline: "Your Website. Ready in a Day.",
  description: "Professional websites for individuals and businesses — live in 24 hours. No setup fee. No hidden charges. No delay.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "https://web4all.in",
  email: "hello@web4all.in",
  supportEmail: "support@web4all.in",
  company: {
    name: "Bong Innovations Pvt Ltd", type: "OPC",
    gstNumber: process.env.GST_NUMBER ?? "19AAMCB6154D1ZL",
    address: "Kolkata, West Bengal, India",
  },
} as const;

export const SLA_CONFIG = {
  ONBOARDING_WINDOW_HOURS: 48,
  DELIVERY_WINDOW_HOURS:   24,
  SUPPORT_RESPONSE_HOURS:  24,
  RENEWAL_REMINDER_DAYS:   3,
} as const;

export const UPLOAD_CONFIG = {
  MAX_FILE_SIZE_MB: 10, MAX_FILE_SIZE_BYTES: 10*1024*1024,
  ALLOWED_IMAGE_TYPES: ["image/jpeg","image/png","image/webp","image/svg+xml"],
  MAX_PHOTOS_COUNT: 10,
  R2_PATHS: { INVOICES:"invoices", LOGOS:"onboarding/logos", PHOTOS:"onboarding/photos", PORTFOLIO:"portfolio", CLIENTS:"clients" },
} as const;

export const TICKET_PREFIX = "TKT";
export const INVOICE_PREFIX = "INV";

export const ROUTES = {
  HOME:"/", HOW_IT_WORKS:"/how-it-works", PLANS:"/plans", PORTFOLIO:"/portfolio",
  ABOUT:"/about", CONTACT:"/contact", PRIVACY:"/legal/privacy-policy",
  TERMS:"/legal/terms", SLA:"/legal/sla", REFUND:"/legal/refund-policy",
  SUPPORT:"/legal/support", LOGIN:"/login", REGISTER:"/register", VERIFY:"/verify",
  DASHBOARD:"/dashboard", ONBOARDING:"/onboarding", SUCCESS:"/success", ADMIN:"/admin",
} as const;