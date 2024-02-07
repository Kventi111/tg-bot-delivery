import { defineConfig } from 'vite'
import { readFileSync } from 'fs'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     // host: 'admin-local.kata.academy',
//     host: 'tg.bot.dev',
//     port: 5173,
//     https: {
//       key: readFileSync('.cert/key.pem'),
//       cert: readFileSync('.cert/cert.pem'),
//     },
//     proxy: {
//       '/api': {
//         target: 'https://api-ru.iiko.services/',
//         changeOrigin: true,
//       },
//     },
//   },
// })
