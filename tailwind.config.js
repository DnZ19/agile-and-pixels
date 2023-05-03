/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			blur: {
				md: "4px",
			},
			maxWidth: {
				custom: "1400px",
			},
			colors: {
				tertiaryColor: "#debaba",
			},
			textColor: {
				mainColor: "#222222",
				secondairyColor: "#F7F7F7",
			},
			backgroundColor: {
				mainBgColor: "#f4cccc",
				secondaryColor: "#222222",
				tertiaryColor: "#debaba",
			},
			borderColor: {
				mainColor: "#222222",
				secondairyColor: "#F7F7F7",
			},
			fontFamily: {
				"custom-font-logo": [
					"CustomLogoFont",
					"sans-serif",
				],
			},
			animation: {
				fadeIn: "fadeIn 1s ease-in-out forwards",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			delay: {
				500: "500ms",
				1000: "2000ms",
				1500: "3500ms",
			},
		},
	},
	variants: {
		extend: {
			blur: ["hover"],
			animation: ["motion-safe"],
			delay: ["motion-safe"],
		},
	},
	plugins: [],
};
