import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Путь сайта на GitHub Pages: https://<логин>.github.io/<имя-репозитория>/
// На GitHub Actions имя репозитория подставляется автоматически
// (переменная GITHUB_REPOSITORY = "логин/имя-репозитория").
// При локальной сборке используется REPO_NAME.
const REPO_NAME = "date-invitation";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || REPO_NAME;

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // npm run dev → "/", npm run build → "/<имя-репозитория>/"
  base: command === "build" ? `/${repo}/` : "/",
}));
