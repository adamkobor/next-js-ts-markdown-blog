import React from 'react'
import Head from 'next/head'
import {BLOG_DESCRIPTION, BLOG_NAME} from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500;700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
        rel="stylesheet"/>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.16.2/styles/dracula.min.css"/>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest"/>
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico"/>
      <link rel="alternate" type="application/rss+xml" href="/rss.xml"/>
      <meta name="msapplication-TileColor" content="#000000"/>
      <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
      <meta name="theme-color" content="#000"/>
      <title>{BLOG_NAME}</title>
      <meta
        name="description"
        content={BLOG_DESCRIPTION}
      />
    </Head>
  )
}

export default Meta
