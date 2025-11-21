import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },

    extend: {

      /* =======================
         TIPOGRAFÍA GLOBAL
      ========================*/
      fontFamily: {
        bobby: ["var(--font-title1)", "serif"],
        "bobby-condensed": ["var(--font-title2)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },

      /* =======================
         PALETA SEA MARITIME UI
      ========================*/
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },

      /* =======================
         GRADIENTES DISEÑADOS
      ========================*/
      backgroundImage: {
        ocean: "linear-gradient(120deg, hsl(var(--secondary)) 0%, hsl(var(--primary)) 100%)",
        accentGlow: "linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--secondary)) 100%)",
        subtle: "linear-gradient(180deg, hsl(var(--background)), hsl(var(--card)))",
      },

      /* =======================
         SOMBRAS PREMIUM
      ========================*/
      boxShadow: {
        elegant: "var(--shadow-elegant)",
        glow: "var(--shadow-glow)",
      },

      /* =======================
         BORDER-RADIUS GLOBAL
      ========================*/
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* =======================
         TIMING CURVES
      ========================*/
      transitionTimingFunction: {
        smooth: "var(--transition-smooth)",
        bounce: "var(--transition-bounce)",
      },

      /* =======================
         ANIMACIONES UI
      ========================*/
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        fade: "fade .4s ease-in-out",
        slideUp: "slideUp .45s var(--transition-bounce)",
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};

export default config;
