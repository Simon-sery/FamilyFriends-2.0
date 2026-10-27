/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn4.thedogapi.com",
      },
      {
        protocol: "https",
        hostname: "cdn2.thedogapi.com",
      },
      {
        protocol: "https",
        hostname: "images.dog.ceo",
      },
    ],
  },
};

export default nextConfig;
