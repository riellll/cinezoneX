/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    // TMDB already serves CDN-optimized, correctly-sized images (the size is in the
    // URL path, e.g. /t/p/w220_and_h330_face). Routing them through Vercel's image
    // optimizer (/_next/image) only adds Fast Origin Transfer + transformation cost
    // for no real benefit, so we load them directly from TMDB's CDN instead.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
