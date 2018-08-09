import React from 'react'

import VideoListItem from './videoListItem'

const videoBuilder = ({ videos, onVideoSelect }) => {
  if (!videos) {
    return <div>Loading...</div>
  }
  const videoArr = videos.reduce((acc, video) => {
    const videoListItem = <VideoListItem
      key={video.etag}
      video={video}
      onVideoSelect={onVideoSelect}
    />

    return [...acc, videoListItem]
  }, [])

  return videoArr
}

export default ({ videos, onVideoSelect }) => <ul className='col-md-4 list-group'>
  { videoBuilder({ videos, onVideoSelect }) }
</ul>
