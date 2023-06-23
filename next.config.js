/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["th.bing.com", "png.pngtree.com", "images.unsplash.com", "tuk-cdn.s3.amazonaws.com"],
  },
  env: {
    WEB_APP_URL: process.env.WEB_APP_URL,
  },
  compress: true,
  async rewrites() {
    return [
      {
        source: "/api/actions/public",
        destination: `${process.env.WEB_APP_URL}/*`,
      },
    ];
  },
};
