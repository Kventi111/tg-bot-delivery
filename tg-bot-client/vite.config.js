import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import { readFileSync } from "fs";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: "tg-bot.dev",
    https: {
      key: readFileSync(".cert/key.pem"),
      cert: readFileSync(".cert/cert.pem"),
    },
    proxy: {
      "/api": {
        target: "https://api-ru.iiko.services",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
