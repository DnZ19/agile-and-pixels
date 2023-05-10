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
				tertiaryColor: "#e0e1dd",
			},
			textColor: {
				mainColor: "#e0e1dd",
				secondairyColor: "#f48c06",
				tertiarColor: "#f48c06",
				serviceColor: "#ffffff",
				buttonText: "#1b263b",
			},
			backgroundColor: {
				mainBgColor: "#1b263b",
				secondaryColor: "#1b263b",
				tertiaryColor: "#e0e1dd",
			},
			borderColor: {
				mainColor: "#778da9",
				secondairyColor: "#415a77",
			},
			fontFamily: {
				"custom-font-logo": [
					"CustomLogoFont",
					"sans-serif",
				],
				"custom-font-italic": [
					"CustomItalicFont",
					"sans-serif",
				],
			},
			animation: {
				fadeInOne: "fadeIn 3s ease-in-out forwards",
				fadeInTwo: "fadeIn 10s ease-in-out forwards",
				fadeInThree: "fadeIn 10s ease-in-out forwards",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			delay: {
				500: "2s",
				1000: "6s",
				1500: "10s",
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
