import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';


export default defineConfig({
	optimizeDeps: {
		include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
	},
	plugins: [sveltekit()],
	envPrefix: 'PUBLIC',
	resolve: {
		alias: {
			$components: resolve('./src/components'),
			$entities: resolve('./src/entities')
		}
	}
});
