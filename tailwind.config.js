/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables class-based dark mode.
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "accent-dark": "rgb(var(--color-accent-dark) / <alpha-value>)",
        "accent-extra-dark":
          "rgb(var(--color-accent-extra-dark) / <alpha-value>)",
      },
    },
  },

  plugins: [],
};
