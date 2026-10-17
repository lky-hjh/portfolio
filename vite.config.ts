import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// GitHub Pages 项目型站点：https://lky-hjh.github.io/portfolio/
// 子路径必须写进 base，否则线上 JS/CSS 全部 404。
// 本地 dev 用根路径，省得每次手敲 /portfolio/。
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/portfolio/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    target: 'es2022',
  },
}))
