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
				mainColor: "#f4cccc",
			},
			backgroundColor: {
				mainBgColor: "#222222",
				secondaryColor: "#f4cccc",
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
