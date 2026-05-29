/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Cache optimized variants aggressively (1 year) — they're content-hashed
    // by source + width + quality, so a long TTL is safe and saves re-encoding.
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
