import React from 'react'
import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
  hero?: boolean
}

const CoverImage = ({ title, src, slug, hero }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
        'w-full h-48 md:h-64 object-cover': !hero,
        'w-full md:h-128 object-cover': hero,
      })}
    />
  )
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
