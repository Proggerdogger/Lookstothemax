import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ilovemoney.fit" }],
        destination: "https://ilovemoney.fit/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
