import React from 'react'
import cx from 'classnames'
import './VideoList.scss'

import { Link } from 'react-router-dom'
import Loading from 'react-loading'

const VideoList = ({ videos, loading }) => {
  const videoList = videos.map(video => {
    return <VideoCard video={video} key={video._id} />
  })

  return (
    <div className={cx('video-card-list')}>
      {videoList}
      {loading && (
        <div className={cx('list-loading')}>
          <Loading type='bubbles' color='#ff2f6e' />
        </div>
      )}
    </div>
  )
}

const VideoCard = ({ video }) => {
  return (
    <div className={cx('video-card')}>
      <Link to={`/videos/${video._id}`}>
        <div className={cx('video-card-thumbnail')}>
          <img
            src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
            draggable='false'
          />

          <div className={cx('video-card-overaytime')}>{video.overayTime}</div>
        </div>
      </Link>
      <div className={cx('video-card-contents')}>
        <div className={cx('video-card-title')}>
          <Link to={`/videos/${video._id}`}>
            <span>{video.title}</span>
          </Link>
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
