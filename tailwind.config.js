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
          navy: "#1f365c",
          amber: "#8f5a2a",
          coral: "#cb6f59",
          cream: "#f8f5ef",
          ink: "#223128",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(26, 107, 74, 0.12)",
      },
    },
  },
  plugins: [],
};

