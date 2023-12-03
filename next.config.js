/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "online-pizza-ordering.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
