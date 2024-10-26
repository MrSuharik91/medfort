import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "medfort",
  plugins: [vue()],
  resolve: {
    alias: {
      publicPath: "/Medford/",
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
