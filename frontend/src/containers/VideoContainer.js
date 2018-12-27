import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as videoActions from 'store/modules/video'

import Video from 'components/Video'
import VideoProgressbar from 'components/VideoProgressbar'
import VideoSubtitle from 'components/VideoSubtitle'
import VideoControls from 'components/VideoControls'

class VideoContainer extends Component {
  prefetch = async () => {
    const { id, VideoActions } = this.props

    try {
      await VideoActions.getVideo(id)
    } catch (e) {
      console.log(e)
    }
  }

  _onReady = e => {
    const { VideoActions } = this.props
    console.log(e.target)

    VideoActions.setYoutube({ name: 'player', value: e.target })
  }

  _onStateControl = () => {
    const { player, VideoActions } = this.props
    const playerState = player.getPlayerState()

    if (playerState === 2 || playerState === 5 || playerState === -1) {
      VideoActions.setYoutube({ name: 'playing', value: true })
      player.playVideo()
    } else {
      VideoActions.setYoutube({ name: 'playing', value: false })
      player.pauseVideo()
    }
  }

  _onStateChange = () => {
    const { player } = this.props
    const playerState = player.getPlayerState()

    if (playerState === 1) {
      const timer = setInterval(() => {
        this.changeCursor(player.getCurrentTime())
      }, 100)
      const { VideoActions } = this.props

      VideoActions.setYoutube({ name: 'timer', value: timer })
    } else {
      clearInterval(this.props.timer)
    }
  }

  changeCursor = currentTime => {
    const { cursor, subtitle } = this.props

    if (!this.props.subtitle || cursor >= subtitle.length - 1) return

    if (currentTime >= subtitle[cursor].start) {
      console.log(currentTime)
      const { VideoActions } = this.props
      VideoActions.setYoutube({ name: 'cursor', value: cursor + 1 })
      VideoActions.setYoutube({
        name: 'subtitleContents',
        value: subtitle[cursor + 1].contents,
      })
    }
  }

  changeLanguage = () => {
    const { language, VideoActions } = this.props

    if (language === 'ko-en') {
      VideoActions.setYoutube({ name: 'language', value: 'en-ko' })
    } else if (language === 'en-ko') {
      VideoActions.setYoutube({ name: 'language', value: 'ko-en' })
    }
  }

  initialize = () => {
    this.prefetch()
  }

  componentDidMount() {
    this.initialize()
  }

  render() {
    if (!this.props.video || this.props.loading) return null
    // console.log(this.props.video)
    return (
      <Fragment>
        <Video
          video={this.props.video}
          _onReady={this._onReady}
          _onStateChange={this._onStateChange}
        />
        <VideoProgressbar />
        <VideoSubtitle
          contents={this.props.subtitleContents}
          language={this.props.language}
        />
        <VideoControls
          _onStateControl={this._onStateControl}
          playing={this.props.playing}
          language={this.props.language}
          changeLanguage={this.changeLanguage}
        />
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    video: state.video.video,
    player: state.video.youtube.player,
    timer: state.video.youtube.timer,
    playing: state.video.youtube.playing,
    cursor: state.video.youtube.cursor,
    subtitleContents: state.video.youtube.subtitleContents,
    language: state.video.youtube.language,
    subtitle: state.video.video.subtitles,
    loading: state.pender.pending['video/GET_VIDEO'],
  }),
  dispatch => ({
    VideoActions: bindActionCreators(videoActions, dispatch),
  })
)(VideoContainer)
