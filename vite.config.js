import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "ka-transportation";

export default defineConfig(({ command }) => {
  const base = command === "build" ? `/${repoName}/` : "/";

  return {
    plugins: [react()],
    base: base,
  };
});
