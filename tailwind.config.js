/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#7C3AED',
					dark: '#6D28D9',
					light: '#A78BFA'
				},
				surface: {
					DEFAULT: '#1A1A2E',
					dark: '#0F0F0F',
					light: '#252542'
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				mono: ['JetBrains Mono', 'Fira Code', 'monospace']
			}
		}
	},
	plugins: []
};
