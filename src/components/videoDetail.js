import React from 'react'

export default ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const url = `https://www.youtube.com/embed/${video.id.videoId}`
  const { title, description } = video.snippet

  return <div className='video-detail col-md-8'>
    <div className='embed-responsive embed-responsive-16by9'>
      <iframe src={url} frameBorder='0' className='embed-responsive-item' />
    </div>
    <div className='details'>
      <div>{ title }</div>
      <div>{ description }</div>
    </div>
  </div>
}
