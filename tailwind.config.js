/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        label: "#00171F",
        primary: "#F0F0F0",
        secondary: "#00171F",
        tertiry: "#979797",
        accent: "#00A8E8",
        danger: "#EF233C",
      },
    },
  },
  plugins: [],
};
