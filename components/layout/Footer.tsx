
import Link from "next/link";

const FOOTER_LINKS = {
  Product: [
    { label:"How It Works", href:"/how-it-works" },
    { label:"Plans",        href:"/plans"         },
    { label:"Portfolio",    href:"/portfolio"     },
    { label:"About",        href:"/about"         },
    { label:"Contact",      href:"/contact"       },
  ],
  Legal: [
    { label:"Privacy Policy",  href:"/legal/privacy-policy" },
    { label:"Terms of Service",href:"/legal/terms"          },
    { label:"SLA",             href:"/legal/sla"            },
    { label:"Refund Policy",   href:"/legal/refund-policy"  },
    { label:"Support & Docs",  href:"/legal/support"        },
  ],
  Account: [
    { label:"Sign In",   href:"/login"     },
    { label:"Register",  href:"/register"  },
    { label:"Dashboard", href:"/dashboard" },
  ],
};

const TRUST = ["No Setup Fee","No Hidden Charges","Live in 24 Hours","Free SSL","Free Domain"];

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-brand-black">
      {/* Trust bar */}
      <div className="border-b border-gold/8 py-4 overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap" style={{ animation:"shimmerScroll 20s linear infinite" }}>
          {[...TRUST,...TRUST,...TRUST].map((t,i) => (
            <span key={i} className="inline-flex items-center gap-2 text-sm text-gold/60 font-medium shrink-0">
              <span className="w-1 h-1 rounded-full pearl-gold-bg" />{t}
            </span>
          ))}
        </div>
      </div>

      <div className="container-tanjun px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div>
              <h2 className="font-heading font-bold text-2xl pearl-gold-text mb-1">Web4All.in</h2>
              <p className="text-cream/50 text-sm leading-relaxed max-w-xs">
                Professional websites for individuals and businesses — live in 24 hours. No setup fee. No hidden charges.
              </p>
            </div>
            <div className="flex flex-col gap-1 text-xs text-cream/30">
              <span>Bong Innovations Pvt Ltd (OPC)</span>
              <span>Kolkata, West Bengal, India</span>
              <span>GSTIN: 19AAMCB6154D1ZL</span>
            </div>
            <a href="mailto:support@web4all.in" className="text-sm text-gold/60 hover:text-gold transition-colors w-fit">
              support@web4all.in
            </a>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-gold/50">{title}</h3>
              <ul className="flex flex-col gap-2.5">
                {links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-cream/45 hover:text-cream transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gold/8 py-5">
        <div className="container-tanjun px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/25">
          <span>© {new Date().getFullYear()} Bong Innovations Pvt Ltd. All rights reserved.</span>
          <span className="flex items-center gap-1.5">Powered by <span className="pearl-gold-text font-semibold">Web4All.in</span></span>
        </div>
      </div>
    </footer>
  );
}
