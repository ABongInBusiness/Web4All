import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}","./features/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT:"#B8892A", bright:"#D4A847", dark:"#2C2108", pearl:"#F2D980", ivory:"#FFF0B0" },
        brand: { black:"#0E0C09", soft:"#1A1510", cream:"#F2EBDC", white:"#FFFFFF" },
      },
      backgroundImage: {
        "pearl-gold": "linear-gradient(135deg,#2C2108 0%,#B8892A 15%,#D4A847 28%,#F2D980 42%,#FFF0B0 50%,#F2D980 58%,#D4A847 72%,#B8892A 85%,#2C2108 100%)",
        "hero-gradient": "radial-gradient(ellipse at top,#1A1510 0%,#0E0C09 60%)",
      },
      animation: {
        "pearl-shimmer": "pearlShimmer 4s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "popup-burst": "popupBurst 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards",
      },
      keyframes: {
        pearlShimmer: { "0%":{backgroundPosition:"0% 50%"},"50%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0% 50%"} },
        float: { "0%,100%":{transform:"translateY(0px)"},"50%":{transform:"translateY(-12px)"} },
        glowPulse: { "0%,100%":{boxShadow:"0 0 20px rgba(184,137,42,0.3)"},"50%":{boxShadow:"0 0 50px rgba(184,137,42,0.7)"} },
        fadeUp: { from:{opacity:"0",transform:"translateY(24px)"},to:{opacity:"1",transform:"translateY(0)"} },
        popupBurst: { "0%":{opacity:"0",transform:"scale(0.5)"},"70%":{transform:"scale(1.05)"},"100%":{opacity:"1",transform:"scale(1)"} },
      },
      boxShadow: {
        "gold-sm":"0 2px 8px rgba(184,137,42,0.2)",
        "gold-md":"0 4px 20px rgba(184,137,42,0.3)",
        "gold-lg":"0 8px 40px rgba(184,137,42,0.4)",
        "gold-glow":"0 0 30px rgba(184,137,42,0.5)",
      },
    },
  },
  plugins: [],
};
export default config;