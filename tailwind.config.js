const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#e0e7ff',
					400: '#818cf8',
					500: '#6366f1',
					600: '#4f46e5',
					900: '#312e81',
				},
				dark: {
					900: '#0F172A', // slate-900
					800: '#1E293B', // slate-800
					700: '#334155', // slate-700
				},
				accent: '#38bdf8', // sky-400
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
