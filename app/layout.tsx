import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Web4All.in — Your Website. Ready in a Day.",
  description: "Professional websites for individuals and businesses — live in 24 hours. No setup fee. No hidden charges.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}