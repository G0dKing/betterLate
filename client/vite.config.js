import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()], // Integrate React
  resolve: {
    alias: {
      // Setup aliases for directories
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  css: {
    // Enables CSS modules
    modules: {
      localsConvention: "camelCase",
    },
    // PostCSS configuration (if you have a postcss.config.js)
    postcss: "./postcss.config.js",
  },
  assetsInclude: ["**/*.ttf", "**/*.otf", "**/*.woff", "**/*.woff2"], // Explicitly include font files
  build: {
    rollupOptions: {
      // Additional Rollup build configurations if needed
    },
    // Adjust the chunk size limit if necessary
    chunkSizeWarningLimit: 500,
  },
  server: {
    // Development server options (e.g., port, proxy)
    port: 3000,
  },
  base: "/", // Base public path for the project (useful if deploying to a subdirectory)
});
