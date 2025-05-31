/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
      extend: {
        animation: {
          glowBlue: "glowBlue 2s ease-in-out infinite alternate",
          glowFadeIn: "glowFadeIn 2s ease-out forwards",
          fadeIn: "fadeIn 2s ease-out forwards",
          blink: "blink 1.5s linear infinite",
          sparkle: "glowFadeIn 2s ease-out forwards",
  
          // ✅ New glow animations
          glowGreen: "glowGreen 1.5s ease-in-out infinite alternate",
          glowYellow: "glowYellow 1.5s ease-in-out infinite alternate",
          glowPurple: "glowPurple 1.5s ease-in-out infinite alternate",
          glowPink: "glowPink 1.5s ease-in-out infinite alternate",
        },
        keyframes: {
          glowBlue: {
            "0%": {
              textShadow: "0 0 5px #93c5fd, 0 0 10px #60a5fa",
            },
            "100%": {
              textShadow: "0 0 10px #3b82f6, 0 0 15px #60a5fa",
            },
          },
          glowFadeIn: {
            "0%": {
              opacity: "0",
              filter: "brightness(0.4)",
              transform: "translateY(20px)",
            },
            "100%": {
              opacity: "1",
              filter: "brightness(1)",
              transform: "translateY(0)",
            },
          },
          fadeIn: {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
          },
          blink: {
            "0%, 100%": { opacity: "1" },
            "50%": { opacity: "0" },
          },
  
          // ✅ New glow keyframes
          glowGreen: {
            "0%": {
              textShadow: "0 0 5px #86efac, 0 0 10px #4ade80",
            },
            "100%": {
              textShadow: "0 0 10px #22c55e, 0 0 20px #4ade80",
            },
          },
          glowYellow: {
            "0%": {
              textShadow: "0 0 5px #fde68a, 0 0 10px #facc15",
            },
            "100%": {
              textShadow: "0 0 10px #eab308, 0 0 20px #facc15",
            },
          },
          glowPurple: {
            "0%": {
              textShadow: "0 0 5px #c4b5fd, 0 0 10px #a78bfa",
            },
            "100%": {
              textShadow: "0 0 10px #8b5cf6, 0 0 20px #a78bfa",
            },
          },
          glowPink: {
            "0%": {
              textShadow: "0 0 5px #f9a8d4, 0 0 10px #ec4899",
            },
            "100%": {
              textShadow: "0 0 10px #db2777, 0 0 20px #ec4899",
            },
          },
        },
      },
    },
    plugins: [require("daisyui")],
  };
  