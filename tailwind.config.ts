import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./store/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Layout
    "flex","hidden","block","inline","inline-flex","grid","relative","absolute","fixed","sticky",
    "flex-col","flex-row","flex-wrap","flex-1","flex-shrink-0",
    "items-center","items-start","items-end",
    "justify-center","justify-between","justify-start","justify-end",
    // Responsive
    "md:flex","md:hidden","md:block","md:grid","md:flex-row",
    "sm:flex","sm:hidden","sm:block","sm:flex-row",
    "lg:grid","lg:col-span-2","lg:flex",
    // Spacing
    "gap-1","gap-2","gap-3","gap-4","gap-5","gap-6","gap-8","gap-10","gap-12",
    "px-4","px-5","px-6","px-8","px-10","py-2","py-3","py-4","py-5","py-6","py-8","py-16","py-24",
    "pt-20","pt-24","pb-6","pb-8","mb-1","mb-2","mb-4","mb-6","mb-8","mb-10","mb-16","mt-1","mt-2","mt-8","mt-16",
    // Sizing
    "w-full","w-px","w-1","w-5","w-7","w-8","w-10","w-24","w-48","w-72","w-96",
    "h-px","h-1","h-8","h-12","h-24","h-48","h-screen","min-h-screen",
    "max-w-xs","max-w-sm","max-w-md","max-w-lg","max-w-xl","max-w-2xl","max-w-4xl",
    // Typography
    "text-xs","text-sm","text-base","text-lg","text-xl","text-2xl","text-4xl","text-5xl","text-7xl",
    "font-medium","font-semibold","font-bold",
    "text-center","text-left","text-right",
    "uppercase","lowercase","tracking-wide","tracking-widest","leading-relaxed","leading-tight",
    // Colors
    "text-cream","text-white","text-gold","bg-brand-black","bg-transparent",
    "text-cream/25","text-cream/30","text-cream/35","text-cream/40","text-cream/45","text-cream/50","text-cream/55","text-cream/60","text-cream/70","text-cream/80",
    "text-gold/25","text-gold/30","text-gold/35","text-gold/40","text-gold/50","text-gold/60","text-gold/70","text-gold/80",
    "bg-gold/3","bg-gold/4","bg-gold/5","bg-gold/8","bg-gold/10","bg-gold/15",
    "bg-white/2","bg-white/3","bg-white/4","bg-white/5",
    "border-gold/8","border-gold/10","border-gold/12","border-gold/15","border-gold/20","border-gold/25","border-gold/35",
    // Rounded
    "rounded","rounded-lg","rounded-xl","rounded-2xl","rounded-3xl","rounded-full",
    // Overflow
    "overflow-hidden","overflow-auto","overflow-x-hidden",
    // Position helpers
    "top-0","bottom-0","left-0","right-0","inset-0","z-40","z-50","z-[90]","z-[91]",
    "-top-2","-right-2","-translate-x-1/2","-translate-y-1/2","translate-y-0","-translate-y-full",
    "left-1/2","left-1/4","right-1/4","top-1/4","bottom-1/4","top-1/2",
    // Transitions
    "transition-all","transition-colors","transition-opacity","duration-200","duration-300",
    "opacity-0","opacity-100",
    // Cursor
    "cursor-pointer",
    // Backdrop
    "backdrop-blur-sm","backdrop-blur",
    // Antialiased
    "antialiased",
    // Rotate/scale
    "rotate-45","-rotate-45","scale-x-0","scale-x-100",
    // Group
    "group","group-hover:opacity-100","group-hover:scale-x-100",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#B8892A",
          bright:  "#D4A847",
          dark:    "#2C2108",
          pearl:   "#F2D980",
          ivory:   "#FFF0B0",
        },
        brand: {
          black: "#0E0C09",
          soft:  "#1A1510",
          cream: "#F2EBDC",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body:    ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "pearl-gold":    "linear-gradient(135deg,#2C2108 0%,#B8892A 15%,#D4A847 28%,#F2D980 42%,#FFF0B0 50%,#F2D980 58%,#D4A847 72%,#B8892A 85%,#2C2108 100%)",
        "hero-gradient": "radial-gradient(ellipse at top,#1A1510 0%,#0E0C09 60%)",
      },
      animation: {
        "pearl-shimmer": "pearlShimmer 4s ease infinite",
        "float":         "float 6s ease-in-out infinite",
        "glow-pulse":    "glowPulse 2s ease-in-out infinite",
        "fade-up":       "fadeUp 0.6s ease forwards",
        "popup-burst":   "popupBurst 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards",
      },
      keyframes: {
        pearlShimmer: { "0%":{backgroundPosition:"0% 50%"},"50%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0% 50%"} },
        float:        { "0%,100%":{transform:"translateY(0px)"},"50%":{transform:"translateY(-12px)"} },
        glowPulse:    { "0%,100%":{boxShadow:"0 0 20px rgba(184,137,42,0.3)"},"50%":{boxShadow:"0 0 50px rgba(184,137,42,0.7)"} },
        fadeUp:       { from:{opacity:"0",transform:"translateY(24px)"},to:{opacity:"1",transform:"translateY(0)"} },
        popupBurst:   { "0%":{opacity:"0",transform:"scale(0.5)"},"70%":{transform:"scale(1.05)"},"100%":{opacity:"1",transform:"scale(1)"} },
      },
      boxShadow: {
        "gold-sm":   "0 2px 8px rgba(184,137,42,0.2)",
        "gold-md":   "0 4px 20px rgba(184,137,42,0.3)",
        "gold-lg":   "0 8px 40px rgba(184,137,42,0.4)",
        "gold-glow": "0 0 30px rgba(184,137,42,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;