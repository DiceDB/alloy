/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dicedb.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'export'
};

export default nextConfig;
