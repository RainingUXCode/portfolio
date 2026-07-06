/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        lexend: ["Lexend", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Consolas", "monospace"],
      },
      colors: {
        brand: {
          background: "rgb(251, 246, 249)",
          pink: "rgb(240, 174, 200)",
          purple: "rgb(198, 180, 232)",
          blue: "rgb(174, 207, 224)",
          green: "rgb(169, 200, 172)",
        },
        text: {
          primary: "rgb(34, 34, 52)",
          secondary: "rgb(98, 105, 126)",
        },
        dark: {
          bg: "#101021",
          card: "#232334",
          text: {
            primary: "#f1f3f4",
            secondary: "#a9a9a9",
          },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        blink: "blink 2.5s infinite ease-in-out",
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.3", transform: "scale(0.8)" },
        },
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
      },
    },
  },
  plugins: [],
};
