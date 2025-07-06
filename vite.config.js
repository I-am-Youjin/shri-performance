import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/shri-performance/",
  plugins: [react()],
  build: {
    assetsDir: "assets",
    manifest: true,
  },
});
