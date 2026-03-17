// svelte.config.js
import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

export default {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      out: 'build'  // folder where your server-ready app will be built
    }),
    // add any base path or trailingSlash settings here if needed
  }
};