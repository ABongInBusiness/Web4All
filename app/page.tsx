
import Link from "next/link";

const TRUST = ["No Setup Fee","No Hidden Charges","Live in 24 Hours","Free SSL","Free Domain"];
const STEPS = [
  { n:"01", title:"Pick a Plan",         desc:"Standard Pro at ₹300/month or Enterprise for a custom quote. Monthly or annual billing." },
  { n:"02", title:"Share Your Details",  desc:"Complete our guided onboarding — upload your logo, brand colors, content and social links." },
  { n:"03", title:"Go Live",             desc:"Your website goes live within 24 hours of onboarding. Zero delays. Zero excuses." },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-gold/4 blur-[100px]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage:`linear-gradient(rgba(184,137,42,1) 1px,transparent 1px),linear-gradient(90deg,rgba(184,137,42,1) 1px,transparent 1px)`, backgroundSize:"60px 60px" }}
        />
        <div className="relative z-10 container-tanjun px-6 py-24 flex flex-col items-center text-center gap-10">
          <div className="flex flex-col items-center gap-6 max-w-4xl">
            <span className="badge-gold">✦ Website as a Subscription — Starting ₹300/month</span>
            <h1 className="heading-display text-5xl md:text-7xl text-cream leading-[1.05]">
              Your Website.{" "}
              <span className="pearl-gold-text block sm:inline">Ready in a Day.</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/55 max-w-2xl leading-relaxed">
              Professional websites for individuals and businesses — delivered live in 24 hours.
              No setup fee. No hidden charges. No delay. Ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/plans?for=individual" className="btn-primary text-base py-4 px-8">
                Get My Personal Website →
              </Link>
              <Link href="/plans?for=business" className="btn-outline text-base py-4 px-8">
                Get My Business Website →
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              {TRUST.map(t => (
                <span key={t} className="flex items-center gap-1.5 text-sm text-cream/40">
                  <span className="w-1 h-1 rounded-full bg-gold/60" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Floating price card */}
          <div className="card-tanjun px-8 py-5 flex items-center gap-6 glass-dark" style={{ animation:"float 6s ease-in-out infinite" }}>
            <div className="text-center">
              <p className="text-xs text-cream/35 uppercase tracking-widest mb-1">Starting at</p>
              <p className="heading-display text-4xl pearl-gold-text">₹300</p>
              <p className="text-xs text-cream/35">/month</p>
            </div>
            <div className="w-px h-12 bg-gold/15" />
            <div className="flex flex-col gap-1.5">
              {["24hr delivery","Free domain + SSL","Hosting included"].map(f => (
                <p key={f} className="text-sm text-cream/55 flex items-center gap-2">
                  <span className="text-gold text-xs">✓</span> {f}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-cream/25 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" style={{ animation:"float 1.5s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section-padding bg-brand-black relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="container-tanjun px-6 text-center">
          <span className="badge-gold mb-4 inline-block">How It Works</span>
          <h2 className="heading-display text-4xl md:text-5xl text-cream mb-4">
            From Zero to <span className="pearl-gold-text">Live Website</span><br />in 3 Simple Steps
          </h2>
          <p className="text-cream/45 max-w-xl mx-auto mb-16">
            We've removed every friction point. No lengthy calls. No confusing forms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20" />
            {STEPS.map((step, i) => (
              <div key={step.n} className="flex flex-col items-center text-center gap-5">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-gold/20" style={{ animation:`glowPulse 3s ease-in-out infinite`, animationDelay:`${i*0.5}s` }} />
                  <div className="absolute inset-2 rounded-full bg-gold/5" />
                  <span className="relative z-10 text-3xl text-gold/60">◎</span>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full pearl-gold-bg flex items-center justify-center text-brand-black text-xs font-bold font-mono">
                    {step.n}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-cream">{step.title}</h3>
                <p className="text-sm text-cream/45 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-sm text-cream/30">
            SLA clock starts after onboarding is submitted · You have{" "}
            <span className="text-gold/70">48 hours</span> to complete onboarding ·
            then we deliver within <span className="text-gold/70">24 hours</span>
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-[#0e0d0a]">
        <div className="container-tanjun px-6">
          <div className="relative card-tanjun border-gold/20 p-12 md:p-20 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px pearl-gold-bg animate-pearl-shimmer" />
            <div className="absolute bottom-0 left-0 right-0 h-px pearl-gold-bg animate-pearl-shimmer" />
            <span className="badge-gold mb-6 inline-block">Start Today</span>
            <h2 className="heading-display text-4xl md:text-5xl text-cream mb-6 max-w-2xl mx-auto">
              Your Website is <span className="pearl-gold-text">24 Hours Away</span>
            </h2>
            <p className="text-cream/45 max-w-lg mx-auto mb-10 text-lg">
              Join individuals and businesses who launched their online presence with Web4All.in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/plans?for=individual" className="btn-primary text-base py-4 px-10">
                Get My Personal Website →
              </Link>
              <Link href="/plans?for=business" className="btn-outline text-base py-4 px-10">
                Get My Business Website →
              </Link>
            </div>
            <p className="mt-8 text-xs text-cream/25">No setup fee · No hidden charges · Cancel anytime</p>
          </div>
        </div>
      </section>
    </>
  );
}
