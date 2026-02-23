import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: "/Portfolio-Website/",
    plugins: [react()],
    build: {
        outDir: 'docs',
    },
    server: {
        port: 3000,
        open: true
    },
    esbuild: {
        loader: "jsx",
        include: /src\/.*\.jsx?$/,
        exclude: []
    }
});
