import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(15, 23, 42, 0.12)",
        soft: "0 12px 40px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.20), transparent 40%), radial-gradient(circle at 80% 20%, rgba(34,197,94,0.16), transparent 30%)",
      },
    },
  },
  plugins: [],
};

export default config;
