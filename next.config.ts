import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['akmweb.youngjoygame.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'akmweb.youngjoygame.com',
        port: '',
        pathname: '/web/svnres/img/mlbb/**',
      },
    ],
  },
};

export default nextConfig;
