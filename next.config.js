/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    COSMIC_BUCKET_SLUG: `${process.env.COSMIC_BUCKET_SLUG}`,
    COSMIC_READ_KEY: `${process.env.COSMIC_READ_KEY}`,
    COSMIC_WRITE_KEY: `${process.env.COSMIC_WRITE_KEY}`,
    NEXT_COSMIC_URL_FETCH: `${process.env.COSMIC_URL_FETCH}`,
    NEXT_NODE_ENV: `${process.env.NODE_ENV}`,
    NEXT_URL_PAGE: `${process.env.URL_PAGE}`,
    NEXT_SPREADSHEET_ID: `${process.env.SPREADSHEET_ID}`,
    NEXT_CLIENT_EMAIL: `${process.env.CLIENT_EMAIL}`,
    NEXT_PRIVATE_KEY: `${process.env.PRIVATE_KEY}`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cosmicjs.com',
        port: '',
        pathname: '/**',
      }, {
        protocol: 'https',
        hostname: 'imgix.cosmicjs.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
}

module.exports = nextConfig
