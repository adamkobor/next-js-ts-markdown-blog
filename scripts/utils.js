const fs = require('fs')
const matter = require('gray-matter')
const path = require('path')

const getPosts = () => {
  const postsDirectory = path.join(process.cwd(), '_posts')
  const posts = fs.readdirSync(postsDirectory).map((slug) => {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    data['slug'] = realSlug
    return data
  })

  return posts
}

module.exports.getPosts = getPosts
module.exports.constants = {
  // TODO replace these
  siteName: 'Your site name',
  baseUrl: 'https://your.site',
  description: 'This is a very nice description',
}
