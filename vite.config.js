/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/Components'),
      '@data': path.resolve(__dirname, 'src/Data'),
      '@pages': path.resolve(__dirname, 'src/Pages'),
      '@utils': path.resolve(__dirname, 'src/Utils'),
      '@contexts': path.resolve(__dirname, 'src/Contexts'),
    }
  }
})