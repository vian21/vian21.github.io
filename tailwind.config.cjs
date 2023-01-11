/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkmode: "class",
  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
        sans: [
          '"Calibre,Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif',
        ],
        mono: ['"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace'],
      },
    },
  },
  plugins: [],
};
