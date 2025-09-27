import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images : {
    remotePatterns : [
      {
         protocol: "https",
        hostname: "www.freetogame.com",
        pathname: "/g/**",
      }
    ]
  }
};

export default nextConfig;
