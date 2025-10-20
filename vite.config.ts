import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        fallback: path.resolve(__dirname, "404.html"),
      },
    },
  },
});
