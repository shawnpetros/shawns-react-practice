import React from 'react'

import VideoListItem from './videoListItem'

export default ({ videos, onVideoSelect }) => <ul className='col-md-4 list-group'>
  {
    videos
      ? videos.map(video => <VideoListItem key={video.etag} video={video} onVideoSelect={onVideoSelect} />)
      : null
  }
</ul>
