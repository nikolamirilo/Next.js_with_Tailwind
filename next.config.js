/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["th.bing.com", "png.pngtree.com", "images.unsplash.com", "tuk-cdn.s3.amazonaws.com"],
  },
  env: {
    WEB_APP_URL: process.env.WEB_APP_URL,
  },
  async rewrites() {
    return [
      {
        source: "/api/actions/public",
        destination: `${WEB_APP_URL}/*`,
      },
      {
        source: "/api/actions",
        destination: `${WEB_APP_URL}/admin*`,
      },
      {
        source: "/api/actions/addNew",
        destination: `${WEB_APP_URL}/doprinesi*`,
      },
      {
        source: "/api/actions/update",
        destination: `${WEB_APP_URL}/admin*`,
      },
    ];
  },
};
