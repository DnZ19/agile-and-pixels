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
			textColor: {
				mainColor: "#222222",
				secundairyColor: "#F7F7F7",
			},
			backgroundColor: {
				mainBgColor: "#f4cccc",
				secondaryColor: "#222222",
			},
		},
	},
	variants: {
		extend: {
			blur: ["hover"],
		},
	},
	plugins: [],
};
