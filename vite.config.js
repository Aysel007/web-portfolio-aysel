import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Ganti link panjang tadi dengan nama repo saja, diapit garis miring /
  base: "/web-portfolio-aysel/",
});
