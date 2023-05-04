/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // important: true,
  theme: {
    extend: {
      height: {
        "75vh": "45rem",
        "half-process": "4.25rem",
        process: "8.5rem",
      },
      width: {
        process: "8.5rem",
        "half-process": "4.25rem",
      },
      borderColor: {
        "white-50": "#ffffff60",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
