import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './VideoList.scss'

import { Link } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'

const VideoList = ({ videos, loading }) => {
  const videoList = videos.map(video => {
    return <VideoCard video={video} key={video._id} />
  })

  return (
    <div className={cx('video-card-list')}>
      {videoList}
      {loading && (
        <div className={cx('list-loading')}>
          <ClipLoader color={'#ff2f6e'} />
        </div>
      )}
    </div>
  )
}

VideoList.defaultProps = {
  videos: [],
  loading: false
}

VideoList.propTypes = {
  videos: PropTypes.array,
  loading: PropTypes.bool
}

const VideoCard = ({ video }) => {
  return (
    <div className={cx('video-card')}>
      <Link to={`/videos/${video._id}`}>
        <div className={cx('video-card-thumbnail')}>
          <img
            src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
            alt={video.title}
            draggable='false'
          />

          <div className={cx('video-card-overaytime')}>{video.overayTime}</div>
        </div>
      </Link>
      <div className={cx('video-card-contents')}>
        <Link to={`/videos/${video._id}`}>
          <div className={cx('video-card-title')}>{video.title}</div>
        </Link>
        <div className={cx('video-card-channel')}>
          <Link to={`/channel/${video.channel}`}>
            <span>{video.channel}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

VideoCard.defaultProps = {
  video: {
    _id: '',
    youtubeId: '',
    overayTime: '0:00',
    sentance: {
      en: '',
      ko: ''
    }
  },
  loading: false
}

VideoCard.propTypes = {
  video: PropTypes.object,
  loading: PropTypes.bool
}

export default VideoList
