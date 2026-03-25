// app/(public)/plans/PlansPageClient.tsx
"use client";

import { useState } from "react";
import {
  PLANS,
  ANNUAL_DISCOUNT_PERCENT,
  getAnnualMonthlySaving,
  type BillingCycle,
  type IPlan,
  type IPlanFeature,
} from "./page";

// ─── Icons ───────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 flex-shrink-0 text-gold"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.3" />
      <path
        d="M5 8l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      className="w-4 h-4 flex-shrink-0 text-cream/25"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.2" />
      <path
        d="M5.5 5.5l5 5M10.5 5.5l-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Billing Toggle ───────────────────────────────────────────────────────────

function BillingToggle({
  cycle,
  onChange,
  discount,
}: {
  cycle: BillingCycle;
  onChange: (c: BillingCycle) => void;
  discount: number;
}) {
  return (
    <div className="flex items-center justify-center gap-3">
      <button
        onClick={() => onChange("monthly")}
        className={`text-sm font-medium transition-colors duration-200 ${
          cycle === "monthly" ? "text-cream" : "text-cream/50 hover:text-cream/70"
        }`}
      >
        Monthly
      </button>

      <button
        onClick={() => onChange(cycle === "monthly" ? "annual" : "monthly")}
        aria-label="Toggle billing cycle"
        className="relative w-12 h-6 rounded-full border border-gold/25 bg-gold/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-gold transition-transform duration-200 ${
            cycle === "annual" ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>

      <button
        onClick={() => onChange("annual")}
        className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
          cycle === "annual" ? "text-cream" : "text-cream/50 hover:text-cream/70"
        }`}
      >
        Annual
        <span className="text-xs font-semibold text-gold bg-gold/10 border border-gold/20 rounded-full px-2 py-0.5">
          Save {discount}%
        </span>
      </button>
    </div>
  );
}

// ─── Plan Card ────────────────────────────────────────────────────────────────

function FeatureRow({ feature }: { feature: IPlanFeature }) {
  return (
    <li className="flex items-center gap-3">
      {feature.included ? <CheckIcon /> : <CrossIcon />}
      <span
        className={`text-sm leading-relaxed ${
          !feature.included
            ? "text-cream/30 line-through"
            : feature.highlight
            ? "text-cream font-medium"
            : "text-cream/70"
        }`}
      >
        {feature.label}
      </span>
    </li>
  );
}

function PlanCard({ plan, cycle }: { plan: IPlan; cycle: BillingCycle }) {
  const price = cycle === "annual" ? plan.annualPrice : plan.monthlyPrice;
  const saving = getAnnualMonthlySaving(plan);
  const isPopular = !!plan.isPopular;
  const isEnterprise = !!plan.isEnterprise;
  const ctaHref = isEnterprise ? "/contact" : "/register";

  return (
    <div
      className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 ${
        isPopular
          ? "border-gold/35 bg-gold/5 shadow-gold-md"
          : "border-gold/12 bg-white/2"
      }`}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute top-0 right-0">
          <span
            className={`inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-bl-xl ${
              isPopular
                ? "bg-gold text-brand-black"
                : "bg-white/5 text-cream/60 border-l border-b border-gold/15"
            }`}
          >
            {plan.badge}
          </span>
        </div>
      )}

      <div className="p-8 flex flex-col flex-1">
        {/* Header */}
        <div className="mb-6">
          <h2 className="font-heading text-2xl font-bold text-cream mb-1">
            {plan.name}
          </h2>
          <p className="text-sm text-cream/50">{plan.tagline}</p>
        </div>

        {/* Price */}
        <div className="mb-6 pb-6 border-b border-gold/10">
          {isEnterprise ? (
            <div>
              <p className="font-heading text-4xl font-bold text-cream">Custom</p>
              <p className="text-sm text-cream/40 mt-1">
                Tailored to your requirements
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-end gap-1">
                <span className="text-cream/50 text-lg self-start mt-2">₹</span>
                <span className="font-heading text-5xl font-bold text-cream leading-none">
                  {price?.toLocaleString("en-IN")}
                </span>
                <span className="text-cream/40 text-sm mb-1">
                  /{cycle === "annual" ? "yr" : "mo"}
                </span>
              </div>
              {cycle === "annual" && saving > 0 && (
                <p className="text-sm text-gold mt-2">
                  You save ₹{saving.toLocaleString("en-IN")} per year
                </p>
              )}
              {cycle === "monthly" && (
                <p className="text-sm text-cream/35 mt-2">
                  Switch to annual &amp; save {plan.annualDiscountPercent}%
                </p>
              )}
            </div>
          )}
        </div>

        {/* Features */}
        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {plan.features.map((feature) => (
            <FeatureRow key={feature.label} feature={feature} />
          ))}
        </ul>

        {/* CTA */}
        <a
          href={ctaHref}
          className={`block w-full text-center py-3 px-6 rounded-xl font-semibold text-sm tracking-wide transition-all duration-200 ${
            isPopular
              ? "bg-gold text-brand-black hover:bg-gold-bright shadow-gold-sm"
              : "border border-gold/25 text-cream/80 hover:border-gold/50 hover:text-cream hover:bg-gold/5"
          }`}
        >
          {plan.cta}
        </a>
      </div>
    </div>
  );
}

// ─── Main Client Component ────────────────────────────────────────────────────

export default function PlansPageClient() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <section className="min-h-screen bg-brand-black py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">
            Pricing
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-cream mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-cream/50 text-lg max-w-xl mx-auto leading-relaxed">
            No setup fees. No hidden charges. Your website goes live in 24 hours
            — guaranteed.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-10">
          <BillingToggle
            cycle={cycle}
            onChange={setCycle}
            discount={ANNUAL_DISCOUNT_PERCENT}
          />
        </div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} cycle={cycle} />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-cream/30 text-sm mt-10">
          All plans include GST invoice. Need something different?{" "}
          <a
            href="/contact"
            className="text-gold/70 hover:text-gold underline underline-offset-2 transition-colors duration-200"
          >
            Talk to us
          </a>
          .
        </p>
      </div>
    </section>
  );
}
