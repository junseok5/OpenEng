import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListActions } from 'store/actionCreators'

import VideoList from 'components/VideoList'
import { getScrollBottom } from 'lib/common'
import throttle from 'lodash/throttle'

class VideoListContainer extends Component {
  _prefetch = async () => {
    const { category, keyword, page, hasEnded, loading } = this.props

    if (hasEnded || loading) return

    try {
      await ListActions.getRecentVideos({ page, category, keyword })
    } catch (e) {
      console.log(e)
    }
  }

  _initialize = () => {
    const { videos } = this.props
    if (videos.length > 0) return
    this._prefetch()
  }

  _onScroll = throttle(() => {
    const scrollBottom = getScrollBottom()
    if (scrollBottom > 500) return
    this._prefetch()
  }, 250)

  _listenScroll = () => {
    window.addEventListener('scroll', this._onScroll)
  }

  _unlistenScroll = () => {
    window.removeEventListener('scroll', this._onScroll)
  }

  componentDidMount = async () => {
    this._initialize()
    this._listenScroll()
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (
      prevProps.keyword !== this.props.keyword ||
      prevProps.category !== this.props.category
    ) {
      await ListActions.initialize()
      this._prefetch()
      document.documentElement.scrollTop = 0
    }
  }

  componentWillUnmount() {
    this._unlistenScroll()
  }

  render() {
    return <VideoList videos={this.props.videos} loading={this.props.loading} />
  }
}

VideoListContainer.propTypes = {
  category: PropTypes.string,
  keyword: PropTypes.string,
  videos: PropTypes.array,
  page: PropTypes.number,
  hasEnded: PropTypes.bool,
  loading: PropTypes.bool,
}

export default connect(state => ({
  videos: state.list.recent.videos,
  page: state.list.recent.page,
  hasEnded: state.list.recent.end,
  loading: state.pender.pending['list/GET_RECENT_VIDEOS'],
}))(VideoListContainer)
