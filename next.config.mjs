/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"], // allow Googleusercontent images
    domains: ["maps.googleapis.com"], // allow Googleusercontent images
  },
  experimental: {
    allowedDevOrigins: ['http://192.168.1.128:3000'],
  },
};

export default nextConfig;
