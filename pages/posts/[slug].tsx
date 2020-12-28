import React from 'react'
import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import {getAllPosts, getPostBySlug} from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import {BASE_URL, BLOG_NAME} from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import PostType from '../../types/post'
import Disqus from 'disqus-react'
import readingTime from 'reading-time'

type Props = {
  post: PostType,
  readingTime: string
}

const Post = ({post, readingTime}: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404}/>
  }

  // TODO replace or remove these
  const disqusShortname = 'YourDisqusShortName'
  const disqusConfig = {
    url: BASE_URL + '/posts/' + post.slug,
    identifier: 'your_uique_disqus_prefix-' + post.slug,
    title: post.title
  }
  return (
    <Layout>
      <Container>
        <Header/>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-10">
              <Head>
                <title>
                  {post.title} | {BLOG_NAME}
                </title>
                <meta
                  name="description"
                  content={post.excerpt}
                />
                <meta property="og:image" content={BASE_URL + post.coverImage}/>
                <meta property="og:title" content={post.title}/>
                <meta property="og:url" content={BASE_URL + '/posts/' + post.slug}/>
                <meta property="og:description" content={post.excerpt}/>
                <meta property="twitter:card" content="summary_large_image"/>
                {/*TODO replace or remove twitter handle*/}
                <meta property="twitter:site" content="@twitter"/>
                <meta property="twitter:title" content={post.title}/>
                <meta property="twitter:description" content={post.excerpt}/>
                <meta property="twitter:image" content={BASE_URL + post.coverImage}/>
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                readingTime={readingTime}
              />
              <PostBody content={post.content}/>
            </article>
            <div className="pb-8 max-w-4xl mx-auto">
              <hr/>
              <h2 className="text-3xl mt-12 mb-4 leading-snug font-bold">Comments</h2>
              <Disqus.DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
              />
            </div>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({params}: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'coverImage',
    'excerpt',
  ])
  const content = await markdownToHtml(post.content || '')
  const stats = readingTime(content)

  return {
    props: {
      post: {
        ...post,
        content,
      },
      readingTime: stats.text
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
