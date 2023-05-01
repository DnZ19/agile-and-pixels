/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
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
