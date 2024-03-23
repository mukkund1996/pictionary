/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.artic.edu"],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
