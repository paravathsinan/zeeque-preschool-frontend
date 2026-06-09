import type { NextConfig } from "next";

/** Origins allowed for fetch/XHR (employment API, local FastAPI, etc.) */
function connectSrcAllowlist(): string {
  const origins = new Set<string>(["http://127.0.0.1:8000", "http://localhost:8000", "https://api.myzeeque.com", "https://generativelanguage.googleapis.com"]);
  const api = process.env.NEXT_PUBLIC_EMPLOYMENT_API_URL?.trim();
  if (api) {
    try {
      const { protocol, host } = new URL(api);
      origins.add(`${protocol}//${host}`);
    } catch {
      /* invalid URL in env — skip */
    }
  }
  return [...origins].join(" ");
}

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
      {
        protocol: 'https',
        hostname: 'api.myzeeque.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/about', destination: '/about-zeeque-preschool-kerala', permanent: true },
      { source: '/features', destination: '/best-preschool-features-kerala', permanent: true },
      { source: '/programs', destination: '/preschool-programs-kerala', permanent: true },
      { source: '/curriculum', destination: '/preschool-curriculum-kerala', permanent: true },
      { source: '/admission', destination: '/preschool-admission-kerala-2026', permanent: true },
      { source: '/teacher-trainees', destination: '/preschool-teacher-training-kerala', permanent: true },
      { source: '/grade-stream-teacher-trainees', destination: '/grade-stream-teacher-training-kerala', permanent: true },
    ];
  },
  async headers() {
    const connectSrc = `'self' ws: wss: https://*.google.com https://*.gstatic.com https://*.googleapis.com ${connectSrcAllowlist()}`;
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.google.com https://*.gstatic.com https://*.googleapis.com https://*.vercel.app",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' blob: data: https: https://*.google.com https://*.gstatic.com https://*.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "media-src 'self' https://assets.mixkit.co",
      `connect-src ${connectSrc}`,
      "frame-src 'self' https://www.google.com https://maps.google.com https://*.google.com",
      "object-src 'none'",
    ].join("; ");
    return [
      {
        source: "/:path*",
        headers: [{ key: "Content-Security-Policy", value: csp }],
      },
    ];
  },
};

export default nextConfig;
