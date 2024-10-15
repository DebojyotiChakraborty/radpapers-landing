/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/radpapers-landing/'
  assetPrefix: '/radpapers-landing/'
};

export default nextConfig;
