/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "inventory-management-rutvik.s3.amazonaws.com",
            port: "",
            pathname: "/**",
          },
        ],
      },
};

export default nextConfig;
