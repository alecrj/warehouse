export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid', // Changed from 'server'
  adapter: netlify({
    edgeMiddleware: false
  }),
  site: 'https://laec.netlify.app',
});