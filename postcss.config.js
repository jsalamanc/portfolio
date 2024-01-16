module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NEXT_NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}