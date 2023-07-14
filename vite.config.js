import {resolve} from 'path';
import {defineConfig} from "vite";
import dotenv from "dotenv";

dotenv.config()
const PORT = process.env.PORT || 3000
export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        outDir: resolve(__dirname, 'dist')
    },
    server: {
        port: PORT
    }
})