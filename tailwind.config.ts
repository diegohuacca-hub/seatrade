import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },

    extend: {
      /* =====================
         TIPOGRAFÍA
      ======================*/
      fontFamily: {
        bobby: ["var(--font-title1)", "serif"],
        "bobby-condensed": ["var(--font-title2)", "serif"],
        poppins: ["var(--font-body)", "sans-serif"],
      },

      /* =====================
         COLORES DEL SISTEMA
      ======================*/
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
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

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },

      /* =====================
         FONDOS PERSONALIZADOS
      ======================*/
      backgroundImage: {
        "gradient-ocean": "var(--gradient-ocean)",
        "gradient-subtle": "var(--gradient-subtle)",
      },

      /* =====================
         SOMBRAS
      ======================*/
      boxShadow: {
        elegant: "var(--shadow-elegant)",
        glow: "var(--shadow-glow)",
      },

      /* =====================
         TRANSICIONES
      ======================*/
      transitionTimingFunction: {
        smooth: "var(--transition-smooth)",
        bounce: "var(--transition-bounce)",
      },

      /* =====================
         RADIOS
      ======================*/
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* =====================
         LAYOUT FIJO GLOBAL
      ======================*/
      width: {
        // Botones navegación
        nav: "10rem",        // Desktop
        navMobile: "8.5rem", // Móvil

        // Botones generales
        btn: "10rem",

        // Cards InfoPage / Recursos
        card: "22rem",
      },

      height: {
        card: "26rem",
        hero: "18rem",
      },

      maxWidth: {
        nav: "10rem",
      },

      /* =====================
         ANIMACIONES
      ======================*/
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"), // mejoras en textos largos/traducciones
  ],
} satisfies Config;
