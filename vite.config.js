import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables global APIs (describe, it, expect) without explicit imports
    environment: 'jsdom', // Specifies the test environment to simulate a browser DOM
    setupFiles: './src/setupTests.js', // Path to my test setup file 
    include: ['**/*.test.{js,jsx}'],
  },
})
