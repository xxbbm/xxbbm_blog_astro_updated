import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://xx.pwpxx.top',
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  })
});
