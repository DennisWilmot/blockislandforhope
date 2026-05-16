/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: "#1a6b4a",
          "forest-dark": "#145639",
          navy: "#1f365c",
          amber: "#8f5a2a",
          coral: "#cb6f59",
          cream: "#f8f5ef",
          "cream-dark": "#f0ebe1",
          ink: "#223128",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(26, 107, 74, 0.08)",
        "soft-lg": "0 12px 40px rgba(26, 107, 74, 0.12)",
        glow: "0 0 0 1px rgba(26, 107, 74, 0.08), 0 8px 30px rgba(26, 107, 74, 0.10)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
