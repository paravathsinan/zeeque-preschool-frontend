import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  async headers() {
    // In development, skip CSP to avoid blocking Next.js dev tooling (which uses eval).
    if (!isProd) {
      return [];
    }

    // In production, enforce a safer CSP (no eval).
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https:; font-src 'self' data:; media-src 'self' https://assets.mixkit.co; connect-src 'self' ws: wss:; object-src 'none';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
