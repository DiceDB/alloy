/** @type {import('next').NextConfig} */
import path from 'node:path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  distDir: 'out',
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, './'),
  }
};

export default nextConfig;
