import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as listActions from 'store/modules/list'

import VideoList from 'components/VideoList'
import { getScrollBottom } from 'lib/common'
import throttle from 'lodash/throttle'

class VideoListContainer extends Component {
  prefetch = async () => {
    const {
      category,
      keyword,
      page,
      hasEnded,
      loading,
      ListActions,
    } = this.props

    if (hasEnded || loading) return

    try {
      await ListActions.getRecentVideos({ page, category, keyword })
      console.log(this.props.videos)
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

  componentDidMount() {
    this.initialize()
    this.listenScroll()
  }

  componentWillUnmount() {
    this.unlistenScroll()
  }

  render() {
    return <VideoList videos={this.props.videos} />
  }
}

export default connect(
  state => ({
    videos: state.list.recent.videos,
    page: state.list.recent.page,
    hasEnded: state.list.recent.end,
    loading: state.pender.pending['list/GET_RECENT_VIDEOS'],
  }),
  dispatch => ({
    ListActions: bindActionCreators(listActions, dispatch),
  })
)(VideoListContainer)
