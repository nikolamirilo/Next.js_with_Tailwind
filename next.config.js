/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["th.bing.com", "png.pngtree.com", "images.unsplash.com", "tuk-cdn.s3.amazonaws.com"],
  },
  experimental: { serverActions: true },
  env: {
    MONGODB_URI: "mongodb+srv://ekoloskimarketing:ekomarketing2023@cluster0.lnyhpwq.mongodb.net",
  },
};
