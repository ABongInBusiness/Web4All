
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label:"How It Works", href:"/how-it-works" },
  { label:"Plans",        href:"/plans"         },
  { label:"Portfolio",    href:"/portfolio"     },
  { label:"About",        href:"/about"         },
  { label:"Contact",      href:"/contact"       },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled,  setScrolled]  = useState(false);
  const [visible,   setVisible]   = useState(true);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setVisible(y < lastY.current || y < 60);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive:true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${scrolled ? "glass-dark border-b border-gold/10 py-3" : "bg-transparent py-5"}`}
      >
        <div className="container-tanjun px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-lg pearl-gold-bg opacity-90" />
              <span className="absolute inset-0 flex items-center justify-center text-brand-black font-bold text-sm font-heading">W</span>
            </div>
            <span className="font-heading font-bold text-xl pearl-gold-text">Web4All.in</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                  pathname === link.href ? "text-gold" : "text-cream/70 hover:text-cream"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-1 left-4 right-4 h-px pearl-gold-bg animate-pearl-shimmer transition-all duration-300 ${
                  pathname === link.href ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                }`} />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login"  className="btn-outline text-sm py-2 px-5">Sign In</Link>
            <Link href="/plans"  className="btn-primary text-sm py-2 px-5">Get Started</Link>
          </div>

          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-cream rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-cream rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-cream rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 glass-dark md:hidden flex flex-col pt-24 pb-8 px-6">
          <nav className="flex flex-col gap-1 flex-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-4 text-lg font-medium rounded-xl transition-all ${
                  pathname === link.href ? "pearl-gold-text bg-gold/5 border border-gold/20" : "text-cream/80 hover:text-cream hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="divider-gold my-6" />
          <div className="flex flex-col gap-3">
            <Link href="/login"  className="btn-outline w-full justify-center">Sign In</Link>
            <Link href="/plans"  className="btn-primary w-full justify-center">Get Started →</Link>
          </div>
        </div>
      )}
    </>
  );
}