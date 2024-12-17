/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
		extend: {
			colors: {
				'primary': {
					DEFAULT: '#0973ff',
					50: '#eef7ff',
					100: '#d9edff',
					200: '#bce0ff',
					300: '#8accff',
					400: '#4daeff',
					500: '#2592ff',
					600: '#0973ff',
					700: '#0061ff',
					800: '#084bc8',
					900: '#0c449b',
				},
				'secondary': {
					DEFAULT: '#ff7a0f',
					50: '#fff8ed',
					100: '#ffefd4',
					200: '#ffdba8',
					300: '#ffc171',
					400: '#ff9937',
					500: '#ff7a0f',
					600: '#ff5d03',
					700: '#cc4105',
					800: '#a1330d',
					900: '#822c0f',
				}
			}
		},
	},
	plugins: [],
}
