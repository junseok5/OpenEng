import React from 'react'
import PropTypes from 'prop-types'
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
          <Loading type='spin' color='#ff2f6e' />
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
            draggable='false'
          />

          <div className={cx('video-card-overaytime')}>{video.overayTime}</div>
        </div>
      </Link>
      <div className={cx('video-card-contents')}>
        <Link to={`/videos/${video._id}`}>
          <div className={cx('video-card-expression')}>
            <div className={cx('video-card-sentance-ko')}>
              {video.sentance.ko}
            </div>
            <div className={cx('video-card-sentance-en')}>
              {video.sentance.en}
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

VideoCard.defaultProps = {
  video: {
    _id: '',
    youtubeId: '',
    overayTime: '0:00',
    title: '비디오를 찾을 수 없습니다.',
    mainSentance: {
      en: '',
      ko: ''
    }
  }
}

VideoCard.propTypes = {
  video: PropTypes.object
}

export default VideoList
