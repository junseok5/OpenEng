import React from 'react'
import cx from 'classnames'
import './VideoList.scss'

const VideoList = ({ videos }) => {
  const videoList = videos.map(video => {
    return <VideoCard video={video} key={video._id} />
  })

  return <div className={cx('video-card-list')}>{videoList}</div>
}

const VideoCard = ({ video }) => {
  return (
    <div className={cx('video-card')}>
      <div className={cx('video-card-thumbnail')}>
        <img
          src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
          draggable='false'
        />
        <div className={cx('video-card-overaytime')}>{video.overayTime}</div>
      </div>
      <div className={cx('video-card-contents')}>
        <div className={cx('video-card-title')}>
          <span>{video.title}</span>
        </div>
        <div className={cx('video-card-expression')}>
          <div className={cx('video-card-sentance')}>
            {video.mainSentance.en}
          </div>
          <div className={cx('video-card-sentance-meaning')}>
            {video.mainSentance.ko}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoList
