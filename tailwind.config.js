/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'system-ui', 'sans-serif']
		},
		extend: {
			spacing: {
				'header-height': '4rem'
			},
			colors: {
				'bg-body': '#F0F2F5',
				'title-color': '#404145',
				'text-color': '#62646A',
			},
			backgroundImage: {
				// 'hero-home': "url('/src/assets/hero.jpg')",
				'hero-home': "url('https://ik.imagekit.io/88up9y9qq/barackpizza/pizza-hero.jpg')",
			}
		},
	},
	plugins: [],
}
