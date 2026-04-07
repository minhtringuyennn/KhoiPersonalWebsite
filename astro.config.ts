import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro';

// TODO: Replace USERNAME and REPO-NAME with your actual GitHub username and repository name.
// Example: site: 'https://johndoe.github.io', base: '/personal-website'
// If using a custom domain, set base: '/' and site: 'https://yourdomain.com'
export default defineConfig({
  site: 'https://USERNAME.github.io',
  base: '/REPO-NAME',
  integrations: [UnoCSS({ injectReset: true })],
});
