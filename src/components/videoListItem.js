import React from 'react'

export default ({ video, onVideoSelect }) => {
  const {
    thumbnails: { default: { url } },
    title
  } = video.snippet

  return <li className='list-group-item' onClick={() => onVideoSelect(video)}>
    <div className='video-list media'>
      <div className='media-left'>
        <img src={url} alt={title} className='media-object' />
      </div>
      <div className='media-body'>
        <div className='media-heading'>{title}</div>
      </div>
    </div>
  </li>
}
