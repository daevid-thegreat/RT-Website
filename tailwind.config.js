/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        myellow: {
          DEFAULT: "#F6B847",
        },
        mblack: {
          DEFAULT: "#231F20",
        },
        mwhite: {
          DEFAULT: "#F9F4E8",
        },
      },
    },
  },
  plugins: [],
};

