const fs = require('fs')
const utils = require('./utils')
const RSS = require('rss')

async function generateRss () {
  const posts = utils.getPosts()

  const dateSortDesc = (a, b) => {
    const date1 = new Date(a.date)
    const date2 = new Date(b.date)
    if (date1 > date2) return -1
    if (date1 < date2) return 1
    return 0
  }

  const feed = new RSS({
    title: utils.constants.siteName,
    site_url: utils.constants.baseUrl,
    feed_url: utils.constants.baseUrl + '/rss.xml',
    pubDate: new Date(),
    description: utils.constants.description,
  })

  posts.sort(dateSortDesc).map(post => {
    feed.item({
      title: post.title,
      guid: utils.constants.baseUrl + '/posts/' + post.slug,
      url: utils.constants.baseUrl + '/posts/' + post.slug,
      date: post.date,
      description: post.excerpt,
    })
  })

  const rss = feed.xml({ indent: true })

  fs.writeFileSync('public/rss.xml', rss)
}

module.exports = generateRss
