import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build:{
    chunkSizeWarningLimit:1600
  },
  server: {
    host: '127.0.0.1', // 或者 '127.0.0.1'
    port: 5173,
    base: '/', // 确保 base 设置正确
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
