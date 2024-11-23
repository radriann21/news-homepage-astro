/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'global': '"Inter", sans-serif'
			},
			colors: {
				primary: {
					'soft-orange': 'hsl(35, 77%, 62%)',
					'soft-red': 'hsl(5, 85%, 63%)',
				},
				neutral: {
					'off-white': 'hsl(36, 100%, 99%)',
					'grayish-blue': 'hsl(233, 8%, 79%)',
					'dark-grayish-blue': 'hsl(236, 13%, 42%)',
					'very-dark-blue': 'hsl(240, 100%, 5%)'
				}
			}
		},
	},
	plugins: [],
}
