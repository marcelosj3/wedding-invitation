/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				green: {
					350: "#9eab92",
				},
				gray: {
					650: "#575757",
				},
			},
		},
	},
	plugins: [],
};
