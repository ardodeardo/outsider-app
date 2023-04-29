/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // env: {
    
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
    ],
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
}

module.exports = nextConfig
