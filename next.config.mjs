/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        protocol: "http",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
