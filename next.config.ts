import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
      remotePatterns: [
        {
          hostname: 'www.jfmoita.pt',
        },
      ],
    },
};

export default nextConfig;
