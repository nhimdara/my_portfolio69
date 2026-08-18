import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')

  return {
    plugins: [react(), tailwindcss()],
    server: {
      watch: {
        ignored: ['**/*.apk', '**/downloads/**'],
      },
    },
    // The Cloudflare Worker serves the site from the domain root. A subpath can
    // still be supplied explicitly (for example, for GitHub Pages).
    base: env.VITE_BASE_PATH || '/',
  }
})
