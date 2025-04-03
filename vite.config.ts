import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postCssGlobalData from '@csstools/postcss-global-data';
import postCssCunstomMedia from 'postcss-custom-media';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  },
  build: {
    sourcemap: true, // Enable source maps
  },
  css: {
    postcss: {
      plugins: [
        postCssGlobalData({
          files: ['./node_modules/open-props/media.min.css'],
        }),
        postCssCunstomMedia(),
      ],
    },
  },
});
