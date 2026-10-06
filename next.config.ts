import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Legacy URL redirects. Older blog/content internal links on the WordPress site
  // point to paths that don't match our current product-category slugs — forward them
  // to the correct routes so no internal link 404s.
  async redirects() {
    return [
      {
        source: "/product-category/wire-wound-resistors/ceramic-encased-resistor",
        destination:
          "/product-category/wire-wound-resistors/ceramic-encased-resistor-wire-wound-resistors",
        permanent: true,
      },
      {
        source: "/product-category/current-sense-resistors/electron-beam-welded-resistors",
        destination: "/product-category/electron-beam-welded-resistors",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
