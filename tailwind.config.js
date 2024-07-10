/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial", "sans-serif"],
      },
      fontSize: {
        siam: "13px",
      },
      colors: {
        blue: {
          DEFAULT: "#007bff",
          dark: "#115599",
          donker: "#003153",
        },
        indigo: {
          DEFAULT: "#6610f2",
        },
        purple: {
          DEFAULT: "#6f42c1",
        },
        pink: {
          DEFAULT: "#e83e8c",
        },
        red: {
          light: "#f3989C",
          DEFAULT: "#dc3545",
          littleDark2: "#AB1F1F",
          dark: "#581313",
          littleDark: "#EA3939",
          pengumuman: "#9a2121",
        },
        orange: {
          DEFAULT: "#fd7e14",
        },
        yellow: {
          DEFAULT: "#ffc107",
          dark: "#ffc905",
        },
        green: {
          DEFAULT: "#28a745",
        },
        teal: {
          DEFAULT: "#20c997",
        },
        cyan: {
          DEFAULT: "#17a2b8",
        },
        white: {
          DEFAULT: "#fff",
        },
        gray: {
          DEFAULT: "#6c757d",
          dark: "#343a40",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
