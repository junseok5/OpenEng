import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListActions } from 'store/actionCreators'

import VideoList from 'components/VideoList'
import { getScrollBottom } from 'lib/common'
import throttle from 'lodash/throttle'

class VideoListContainer extends Component {
  prefetch = async () => {
    const { category, keyword, page, hasEnded, loading } = this.props

    if (hasEnded || loading) return

    try {
      await ListActions.getRecentVideos({ page, category, keyword })
    } catch (e) {
      console.log(e)
    }
  }

  initialize = () => {
    const { videos } = this.props
    if (videos.length > 0) return
    this.prefetch()
  }

  onScroll = throttle(() => {
    const scrollBottom = getScrollBottom()
    if (scrollBottom > 500) return
    this.prefetch()
  }, 250)

  listenScroll = () => {
    window.addEventListener('scroll', this.onScroll)
  }

  unlistenScroll = () => {
    window.removeEventListener('scroll', this.onScroll)
  }

  componentDidMount = async () => {
    this.initialize()
    this.listenScroll()
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (
      prevProps.keyword !== this.props.keyword ||
      prevProps.category !== this.props.category
    ) {
      await ListActions.initialize()
      this.prefetch()
      document.documentElement.scrollTop = 0
    }
  }

  componentWillUnmount() {
    this.unlistenScroll()
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
