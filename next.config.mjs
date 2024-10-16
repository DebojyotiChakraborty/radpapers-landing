/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    unoptimized: true,
  },
  // When using domains other than debojyotichakraborty.github.io
  // the following configurations might cause problem
  // Also, with these configurations the development server
  // starts at http://localhost:3000/radpapers-landing/
  // When publishing to radpapers.in, it's better to
  // remove these lines
  
  trailingSlash: true,
  basePath: '/radpapers-landing',
  assetPrefix: '/radpapers-landing'
};

export default nextConfig;
