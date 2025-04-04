export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "4/5": "80%", // Adds max-w-4/5
        "80vh": "80vh", // Adds max-w-80vh
      },
      colors: {
        "pure-white": "#FFF9E8",
        "light-gray": "#FDF3DA",
        "soft-white": "#FCEEC9",
        "warm-beige": "#D4A76A",
        "medium-brown": "#B78542",
        "dark-brown": "#5C4033",
        "gold": "#A67C38", // Fixed hex code
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }, // Move only half for smooth looping
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-out forwards", // Added slideDown keyframe
        "spin-slow": "spin 1.5s linear infinite",
        slideLeft: "slideLeft 20s linear infinite", // Add animation
      },
    },
  },
  plugins: [],
};