import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.env.NODE_ENV === "production" ? "/Club-Website" : "",
		}
	},
	preprocess: preprocess({ defaults: { script: 'typescript' }})
};

export default config;