import React from 'react'
import markdownStyles from './markdown-styles.module.css'
import {SRLWrapper} from 'simple-react-lightbox'

type Props = {
  content: string
}

const lightboxOptions = {
  settings: {
    disableKeyboardControls: true,
    disablePanzoom: true,
    disableWheelControls: true
  },
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false
  },
  thumbnails: {
    showThumbnails: false
  },
  caption: {
    showCaption: false
  }
}

const PostBody = ({content}: Props) => {
  return (
    <div className="max-w-4xl mx-auto">
      <SRLWrapper options={lightboxOptions}>
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{__html: content}}
        />
      </SRLWrapper>
    </div>
  )
}

export default PostBody
