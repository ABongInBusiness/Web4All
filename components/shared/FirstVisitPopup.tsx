
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "w4a_popup_seen";

export default function FirstVisitPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      const t = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => { localStorage.setItem(STORAGE_KEY, "true"); setVisible(false); };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[90] bg-brand-black/80 backdrop-blur-sm" onClick={dismiss} />

      {/* Popup */}
      <div className="fixed inset-0 z-[91] flex items-center justify-center px-4 pointer-events-none">
        <div
          className="pointer-events-auto relative w-full max-w-md overflow-hidden rounded-3xl border border-gold/25 bg-brand-black"
          style={{ animation:"popupBurst 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards", boxShadow:"0 8px 40px rgba(184,137,42,0.3)" }}
        >
          <div className="h-1 w-full pearl-gold-bg animate-pearl-shimmer" />
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

          <div className="relative px-8 pt-8 pb-6 flex flex-col items-center text-center gap-5">
            <span className="badge-gold">🔥 Limited Time Offer</span>

            <div>
              <h2 className="heading-display text-4xl text-cream leading-tight mb-2">
                A Website Under <span className="pearl-gold-text">$3</span> a Month
              </h2>
              <p className="text-2xl font-heading font-semibold text-gold/80">Now or Never?</p>
            </div>

            <div className="flex flex-col gap-2 w-full">
              {["✓  Live in 24 hours","✓  Free domain + SSL","✓  No setup fee. No hidden charges."].map(item => (
                <p key={item} className="text-sm text-cream/55">{item}</p>
              ))}
            </div>

            <Link href="/plans" onClick={dismiss} className="btn-primary w-full justify-center text-base py-4" style={{ animation:"glowPulse 2s ease-in-out infinite" }}>
              Grab It Now →
            </Link>

            <button onClick={dismiss} className="text-xs text-cream/30 hover:text-cream/60 transition-colors pb-1">
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </>
  );
}