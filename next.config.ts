import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // https://i.ibb.co.com/khHN7Pk/9780143454212.jpg
  //https://images.unsplash.com/photo-1516979187457-637abb4f9353
  reactCompiler: true,
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '**',
        search: '',
      },
        {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
