import remark from 'remark'
import html from 'remark-html'
import highlight from 'remark-highlight.js'
import externalLinks from 'remark-external-links'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html)
    .use(highlight)
    .use(externalLinks, {target: '_blank', rel: 'noreferrer noopener'})
    .process(markdown)
  return result.toString()
}
