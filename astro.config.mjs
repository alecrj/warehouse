export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid', // Change back to hybrid
  adapter: netlify(),
  site: 'https://laec.netlify.app',
});