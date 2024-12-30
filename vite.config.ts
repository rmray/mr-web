import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  // 别名配置
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})


