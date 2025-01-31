import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
