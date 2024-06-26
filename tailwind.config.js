/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");
module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				background: '#f2f2f2'
			},
			screens: {
				'xs': '420px',
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar-hide'),
		nextui()
	]
}
