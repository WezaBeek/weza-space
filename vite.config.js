import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    server: {
        port: 3000,
        open: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                indexEn: resolve(__dirname, 'pages/index-en.html'),
                systemMap: resolve(__dirname, 'pages/system-map.html'),
                systemMapEn: resolve(__dirname, 'pages/system-map-en.html')
            }
        }
    }
});
