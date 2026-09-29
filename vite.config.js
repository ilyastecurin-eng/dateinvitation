import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Имя репозитория на GitHub. Сайт будет доступен по адресу
// https://<логин>.github.io/date-invitation/
// Если переименуете репозиторий — поменяйте и здесь.
const REPO_NAME = "date-invitation";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // При локальной разработке (npm run dev) сайт открывается от корня "/",
  // а при сборке (npm run build) — от "/date-invitation/" для GitHub Pages.
  base: command === "build" ? `/${REPO_NAME}/` : "/",
}));
