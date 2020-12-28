import React from 'react'
import {AUTHOR_IMAGE, AUTHOR_NAME} from '../lib/constants';

const Avatar = () => {
  return (
    <div className="flex items-center">
      <img src={AUTHOR_IMAGE} className="w-12 h-12 rounded-full mr-4" alt={AUTHOR_NAME}/>
      <div className="text-xl font-bold">{AUTHOR_NAME}</div>
    </div>
  )
}

export default Avatar
