/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    COSMIC_BUCKET_SLUG: `${process.env.COSMIC_BUCKET_SLUG}`,
    COSMIC_READ_KEY: `${process.env.COSMIC_READ_KEY}`,
    COSMIC_WRITE_KEY: `${process.env.COSMIC_WRITE_KEY}`,
    NEXT_COSMIC_URL_FETCH: `${process.env.COSMIC_URL_FETCH}`,
    NEXT_NODE_ENV: `${process.env.NODE_ENV}`,
    NEXT_URL_PAGE: `${process.env.URL_PAGE}`
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
}

module.exports = nextConfig
