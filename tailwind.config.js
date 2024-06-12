/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#0082fd",
        indigo: "#6610f2",
        purple: "#6f42c1",
        pink: "#e83e8c",
        red: "#dc3545",
        orange: "#fd7e14",
        yellow: "#feed00",
        green: "#28a745",
        lightGreen: "#27ae60",
        teal: "#20c997",
        cyan: "#17a2b8",
        gray: "#495057",
        grayDark: "#343a40",
        primary: "#007bff",
        secondary: "#6c757d",
        warning: "#ffc107",
        light: "#f8f9fa",
        dark: "#212529",
      },
    },
  },
  plugins: [],
};
