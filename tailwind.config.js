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
					50: '#eef2ff',
					100: '#e0e7ff',
					400: '#818cf8',
					500: '#6366f1',
					600: '#4f46e5',
					700: '#4338ca',
					900: '#312e81',
				},
				dark: {
					950: '#030712', // Obsidian dark background
					900: '#080B10', // Deep dashboard dark
					800: '#0F172A', // Slate-900
					700: '#1E293B', // Slate-800
					600: '#334155', // Slate-700
				},
				accent: '#00f5ff', // Cyber cyan
				violetAccent: '#a855f7', // Electric violet
				terminalGreen: '#10b981', // Emerald green
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'caret': 'blink 1s step-end infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				blink: {
					'from, to': { borderColor: 'transparent' },
					'50%': { borderColor: '#00f5ff' },
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
