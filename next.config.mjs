/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ponytail: every image goes through next/image, so let Next resize and
    // re-encode. Set unoptimized: true again only if this ever ships as a
    // static export (output: 'export'), which has no optimizer at runtime.
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
