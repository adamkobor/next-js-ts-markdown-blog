const fs = require('fs')
const utils = require('./utils')

async function generateSitemap () {
  const posts = utils.getPosts()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
        <loc>${utils.constants.baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    ${posts.map((post) => {
    return `
        <url>
            <loc>${utils.constants.baseUrl + '/posts/' + post.slug}</loc>
            <lastmod>${new Date(post.date).toISOString()}</lastmod>
        </url>`
  }).join('')}
    </urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

module.exports = generateSitemap
