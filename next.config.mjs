/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/easy-sell-nextjs",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'jlzvktrtmclopylirnmh.supabase.co',
      },
    ],
  },
};

export default nextConfig;
