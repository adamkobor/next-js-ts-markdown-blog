module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/build-sitemap')()
      require('./scripts/build-rss')()
    }

    return config
  },
}
