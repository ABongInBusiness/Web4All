import type { Metadata } from "next";
import PlansPageClient from "./PlansPageClient";

export type BillingCycle = "monthly" | "annual";
export type PlanId = "standard_pro" | "enterprise";

export interface IPlanFeature {
  label: string;
  included: boolean;
  highlight?: boolean;
}

export interface IPlan {
  id: PlanId;
  name: string;
  tagline: string;
  monthlyPrice: number | null;      // null = custom
  annualPrice: number | null;       // null = custom
  annualDiscountPercent: number;
  currency: string;
  billingCycles: BillingCycle[];
  features: IPlanFeature[];
  cta: string;
  badge?: string;
  isPopular?: boolean;
  isEnterprise?: boolean;
}

export const ANNUAL_DISCOUNT_PERCENT = 15;

const calculateAnnualPrice = (monthly: number, discount: number): number => {
  return Math.round(monthly * 12 * (1 - discount / 100));
};

export const PLANS: IPlan[] = [
  {
    id: "standard_pro",
    name: "Standard Pro",
    tagline: "Perfect for individuals & small businesses",
    monthlyPrice: 300,
    annualPrice: calculateAnnualPrice(300, ANNUAL_DISCOUNT_PERCENT), // ₹3,060
    annualDiscountPercent: ANNUAL_DISCOUNT_PERCENT,
    currency: "INR",
    billingCycles: ["monthly", "annual"],
    isPopular: true,
    badge: "Most Popular",
    cta: "Get Started",
    features: [
      { label: "Website live in 24 hours",        included: true,  highlight: true },
      { label: "Free domain included",             included: true,  highlight: true },
      { label: "Free SSL certificate",             included: true },
      { label: "Hosting included",                 included: true },
      { label: "2 rounds of revisions",            included: true },
      { label: "Mobile responsive design",         included: true },
      { label: "Email support (24hr response)",    included: true },
      { label: "One-time or auto-recurring billing", included: true },
      { label: "GST invoice provided",             included: true },
      { label: "Theme change / full redesign",     included: false },
      { label: "Dedicated account manager",        included: false },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Custom solutions for growing businesses",
    monthlyPrice: null,
    annualPrice: null,
    annualDiscountPercent: 0,
    currency: "INR",
    billingCycles: [],
    isEnterprise: true,
    badge: "Custom",
    cta: "Contact Us",
    features: [
      { label: "Everything in Standard Pro",       included: true,  highlight: true },
      { label: "Custom design & branding",         included: true,  highlight: true },
      { label: "Unlimited revisions",              included: true },
      { label: "Priority delivery",                included: true },
      { label: "Dedicated account manager",        included: true },
      { label: "Custom integrations",              included: true },
      { label: "E-commerce capabilities",          included: true },
      { label: "SEO optimization",                 included: true },
      { label: "Monthly performance report",       included: true },
      { label: "Custom SLA agreement",             included: true },
      { label: "White-glove onboarding",           included: true },
    ],
  },
];

export const getPlanById = (id: PlanId): IPlan | undefined =>
  PLANS.find((p) => p.id === id);

export const formatPrice = (
  amount: number | null,
  currency: string = "INR"
): string => {
  if (amount === null) return "Custom";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const getAnnualMonthlySaving = (plan: IPlan): number => {
  if (!plan.monthlyPrice || !plan.annualPrice) return 0;
  return plan.monthlyPrice * 12 - plan.annualPrice;
};

// ─── Page Metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Plans & Pricing",
  description:
    "Simple, transparent pricing. Get your website live in 24 hours with Web4All.in.",
};

// ─── Page Component ───────────────────────────────────────────────────────────

export default function PlansPage() {
  return <PlansPageClient />;
}
