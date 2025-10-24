/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F7931D",
        "primary-dark": "#CD7122",
        accent: "#FDAD35",
        "deep-brown": "#723010",
        slate: "#0F172A",
        muted: "#64748B",
        "surface-light": "#F8FAFC",
      },
      boxShadow: {
        soft: "0 20px 45px rgba(15, 23, 42, 0.12)",
      },
      borderRadius: {
        xl: "1.25rem",
      },
    },
  },
  plugins: [],
};
