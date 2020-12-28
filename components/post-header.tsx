import React from 'react'
import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'

type Props = {
  title: string
  coverImage: string
  date: string
  readingTime: string
}

const PostHeader = ({title, coverImage, date, readingTime}: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar/>
      </div>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} hero={true}/>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar/>
        </div>
        <div className="mb-6 text-lg text-gray-600 italic">
          <span className="font-bold"><DateFormatter dateString={date}/></span> | <span>{readingTime}</span>
        </div>
      </div>
    </>
  )
}

export default PostHeader
