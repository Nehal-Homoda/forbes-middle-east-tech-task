/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: ["36px", "44px"],
        h2: ["28px", "36px"],
        h3: ["24px", "32px"],
        h4: ["20px", "28px"],
        h5: ["18px", "26px"],
        h6: ["16px", "24px"],

        "body-lg": ["18px", "28px"],
        "body-md": ["16px", "24px"],
        "body-sm": ["14px", "22px"],

        caption: ["12px", "18px"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
      },

      colors: {
        transparent: "transparent",
        background: "rgba(var(--color-background),1)",
        surface: "rgba(var(--color-surface),1)",
        muted: "rgba(var(--color-muted),1)",
        foreground: "rgba(var(--color-foreground),1)",
        error: "rgba(var(--color-error),1)",
        success: "rgba(var(--color-success),1)",
        blueBg: "rgba(var(--color-blue-bg),1)",

        primary: {
          DEFAULT: "rgba(var(--color-primary), 1)",
          100: "rgba(var(--color-primary-100), 1)",
          200: "rgba(var(--color-primary-200), 1)",
          300: "rgba(var(--color-primary-300), 1)",
          400: "rgba(var(--color-primary-400), 1)",
          500: "rgba(var(--color-primary-500), 1)",
          600: "rgba(var(--color-primary-600), 1)",
          700: "rgba(var(--color-primary-700), 1)",
          800: "rgba(var(--color-primary-800), 1)",
          900: "rgba(var(--color-primary-900), 1)",
          light: {
            DEFAULT: "rgba(var(--color-primary-light), 1)",
            100: "rgba(var(--color-primary-light-100), 1)",
            200: "rgba(var(--color-primary-light-200), 1)",
            300: "rgba(var(--color-primary-light-300), 1)",
            400: "rgba(var(--color-primary-light-400), 1)",
            500: "rgba(var(--color-primary-light-500), 1)",
            600: "rgba(var(--color-primary-light-600), 1)",
            700: "rgba(var(--color-primary-light-700), 1)",
            800: "rgba(var(--color-primary-light-800), 1)",
          },
        },
        secondary: {
          DEFAULT: "rgba(var(--color-secondary),1)",
          100: "rgba(var(--color-secondary-100),1)",
          200: "rgba(var(--color-secondary-200),1)",
          300: "rgba(var(--color-secondary-300),1)",
          400: "rgba(var(--color-secondary-400),1)",
          500: "rgba(var(--color-secondary-500),1)",
          600: "rgba(var(--color-secondary-600),1)",
          700: "rgba(var(--color-secondary-700),1)",
          800: "rgba(var(--color-secondary-800),1)",

          light: {
            DEFAULT: "rgba(var(--color-secondary-light),1)",
            100: "rgba(var(--color-secondary-light-100),1)",
            200: "rgba(var(--color-secondary-light-200),1)",
            300: "rgba(var(--color-secondary-light-300),1)",
            400: "rgba(var(--color-secondary-light-400),1)",
            500: "rgba(var(--color-secondary-light-500),1)",
            600: "rgba(var(--color-secondary-light-600),1)",
            700: "rgba(var(--color-secondary-light-700),1)",
            800: "rgba(var(--color-secondary-light-800),1)",
          },
        },
      },

      // boxShadow: {
      //     sm: "0 0 48px 0 rgba(0,0,0,0.06)",
      //     md: "0 0 48px 0 rgba(0,0,0,0.08)",
      // },
    },
  },
  plugins: [],
};
