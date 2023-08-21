/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: '#f2f2f2',
				mainBlue: '#07f',
				mainBlueDarker: '#0064de'
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('tailwind-scrollbar-hide')
	],
}
