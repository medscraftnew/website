/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        primary: ['"Crimson Pro"', 'serif'],      // Poppins as the primary font - i got this from goolge
        secondary: ['"Dancing Script"', 'cursive'], // Dancing Script as the secondary font - i got this from goolge
      },
      colors: {}
    },
    animation: {
      scroll:
        "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
    },
    keyframes: {
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), addVariablesForColors,
    require('flowbite/plugin')
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}


// /** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");

// const colors = require("tailwindcss/colors");
// const {
//   default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");

// export default {
//   darkMode: ["class"],
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       colors: {},
//     },
//     animation: {
//       scroll:
//         "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
//     },
//     keyframes: {
//       scroll: {
//         to: {
//           transform: "translate(calc(-50% - 0.5rem))",
//         },
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate"), addVariablesForColors],
// };

// function addVariablesForColors({ addBase, theme }) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }
