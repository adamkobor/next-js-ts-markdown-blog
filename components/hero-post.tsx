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

const HeroPost = ({
                    title,
                    coverImage,
                    date,
                    excerpt,
                    slug,
                  }: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} hero={true}/>
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-10 md:mb-14">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline font-bold">{title}</a>
            </Link>
          </h3>
        </div>
        <div>
          <div className="mb-4 text-lg text-gray-600 font-bold italic">
            <DateFormatter dateString={date}/>
          </div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar/>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
