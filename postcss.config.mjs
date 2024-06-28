/** @type {import('postcss-load-config').Config} */
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

module.exports = {
	plugins: [
		// Some plugins, like postcss-nested, need to run before Tailwind
		tailwind(),
		// But others, like autoprefixer, need to run after
		autoprefixer()
	]
};
