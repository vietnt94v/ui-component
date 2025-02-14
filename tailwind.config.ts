import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        slideInLeft: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        slideOutLeft: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        slideInRight: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        slideOutRight: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
        slideInTop: {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        slideOutTop: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-100%)" },
        },
        slideInBottom: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        slideOutBottom: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(100%)" },
        },
      },
      animation: {
        slideInLeft: "slideInLeft .3s ease-out",
        slideOutLeft: "slideOutLeft .3s ease-out",
        slideInRight: "slideInRight .3s ease-out",
        slideOutRight: "slideOutRight .3s ease-out",
        slideInTop: "slideInTop .3s ease-out",
        slideOutTop: "slideOutTop .3s ease-out",
        slideInBottom: "slideInBottom .3s ease-out",
        slideOutBottom: "slideOutBottom .3s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
