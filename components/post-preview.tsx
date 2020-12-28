import React from 'react'
import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
}

const PostPreview = ({
                       title,
                       coverImage,
                       date,
                       excerpt,
                       slug,
                     }: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage}/>
      </div>
      <h3 className="text-2xl mb-3 font-bold leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4 text-gray-600 font-bold italic">
        <DateFormatter dateString={date}/>
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar/>
    </div>
  )
}

export default PostPreview
