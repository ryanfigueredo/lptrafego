// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-figtree)"],
        display: ["var(--font-outfit)"],
      },
    },
  },
  plugins: [],
};

export default config;
