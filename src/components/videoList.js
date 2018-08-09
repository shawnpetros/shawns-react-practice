import React from 'react'

import VideoListItem from './videoListItem'

const videoBuilder = ({ videos, onVideoSelect }) => {
  if (!videos) {
    return <div>Loading...</div>
  }
  const videoArr = videos.map((video) => <VideoListItem
    key={video.etag}
    video={video}
    onVideoSelect={onVideoSelect}
  />)

  return videoArr
}

export default ({ videos, onVideoSelect }) => <ul className='col-md-4 list-group'>
  { videoBuilder({ videos, onVideoSelect }) }
</ul>
