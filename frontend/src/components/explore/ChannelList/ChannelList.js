import React from 'react'
import cx from 'classnames'
import './ChannelList.scss'

import { Link } from 'react-router-dom'

const Channel = ({ link, thumbnail, channelName, description }) => {
  return (
    <Link to={link}>
      <div className={cx('channel')}>
        <div className={cx('channel-thumbnail')}>
          <img
            src={thumbnail}
            alt={channelName}
            className={cx('_cover-photo')}
          />
        </div>
        <div className={cx('channel-info')}>
          <div className={cx('channel-name')}>{channelName}</div>
          <div className={cx('channel-desc')}>{description}</div>
        </div>
      </div>
    </Link>
  )
}

const ChannelList = () => {
  return (
    <div className={cx('channel-list')}>
      <h3>채널</h3>
      <Channel
        link='/channel/Team Coco'
        thumbnail='https://yt3.ggpht.com/a-/AAuE7mCyzC1-No0_qQSIIj7adykHC3veXX3UxTJxrQ=s288-mo-c-c0xffffffff-rj-k-no'
        channelName='Team Coco'
        description='코난오브라이언과 함께하는 토크쇼!'
      />
    </div>
  )
}

export default ChannelList
