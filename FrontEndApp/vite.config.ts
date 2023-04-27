import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
  build: {
    outDir: './../dist',
    chunkSizeWarningLimit: 1000,
  },
  base: mode == 'development' ? '' : './',
  plugins: [vue(), vueJsx(),vuetify({autoImport: true, styles: {configFile: 'src/settings.scss'}})],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
  }
}))
