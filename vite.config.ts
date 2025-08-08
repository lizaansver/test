import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/test/', // Убедись, что это имя твоего репозитория
  plugins: [react()],
});
