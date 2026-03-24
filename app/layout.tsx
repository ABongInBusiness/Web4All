
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FirstVisitPopup from "@/components/shared/FirstVisitPopup";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Web4All.in — Your Website. Ready in a Day.", template: "%s | Web4All.in" },
  description: "Professional websites for individuals and businesses — live in 24 hours. No setup fee. No hidden charges. No delay.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "https://web4all.in"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="bg-brand-black text-cream antialiased">
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <FirstVisitPopup />
      </body>
    </html>
  );
}

