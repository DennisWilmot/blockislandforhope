import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/missions",
        destination: "/what-we-do",
        permanent: true,
      },
      {
        source: "/missions/:slug",
        destination: "/what-we-do/:slug",
        permanent: true,
      },
      {
        source: "/what-we-do/pondside-primary-st-elizabeth",
        destination: "/what-we-do/vineyards-black-river-day-1",
        permanent: true,
      },
      {
        source: "/what-we-do/top-hill-primary-st-elizabeth",
        destination: "/what-we-do/shewberry-school-st-elizabeth",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
