import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { VideoActions } from 'store/actionCreators'

import Video from 'components/Video'
import VideoProgressbar from 'components/VideoProgressbar'
import VideoSubtitle from 'components/VideoSubtitle'
import VideoControls from 'components/VideoControls'

class VideoContainer extends Component {
  prefetch = async () => {
    const { id } = this.props

    try {
      await VideoActions.getVideo(id)
    } catch (e) {
      console.log(e)
    }
  }

  _onReady = e => {
    console.log(e.target)

    VideoActions.setYoutube({
      duration: e.target.getDuration(),
      player: e.target,
    })
  }

  _onStateControl = () => {
    const { player } = this.props
    const playerState = player.getPlayerState()

    if (playerState === 1 || playerState === 3) {
      player.pauseVideo()
    } else {
      player.playVideo()
    }
  }

  _onStateChange = () => {
    const { player } = this.props
    const playerState = player.getPlayerState()
    console.log(playerState)

    if (playerState === 1) {
      const timer = setInterval(() => {
        const { sectionRepeat } = this.props
        const currentTime = player.getCurrentTime()
        console.log('hi')

        VideoActions.setYoutube({ currentTime, playing: true })

        // 구간 반복
        if (sectionRepeat) {
          this.sectionRepeat(currentTime)
          return
        }

        this.autoChangeCursor(currentTime)
      }, 100)

      VideoActions.setYoutube({ timer })
    } else if (playerState === 3) {
      clearInterval(this.props.timer)
    } else {
      VideoActions.setYoutube({ playing: false })
      clearInterval(this.props.timer)
    }
  }

  autoChangeCursor = currentTime => {
    const { cursor, subtitle } = this.props

    if (!this.props.subtitle || cursor >= subtitle.length - 1) return

    if (currentTime >= subtitle[cursor + 1].start) {
      VideoActions.setYoutube({
        cursor: cursor + 1,
        subtitleContents: subtitle[cursor + 1].contents,
      })
    }
  }

  skipPrev = () => {
    const { cursor, player, subtitle } = this.props

    if (cursor === 0) return
    const prevCursor = cursor - 1
    const prevStart = subtitle[prevCursor].start
    const prevSubtitle = subtitle[prevCursor].contents

    VideoActions.setYoutube({
      cursor: prevCursor,
      subtitleContents: prevSubtitle,
    })
    player.seekTo(prevStart)
  }

  skipNext = () => {
    const { cursor, player, subtitle } = this.props

    if (cursor >= subtitle.length - 1) return
    const nextCursor = cursor + 1
    const nextStart = subtitle[nextCursor].start
    const nextSubtitle = subtitle[nextCursor].contents

    VideoActions.setYoutube({
      cursor: nextCursor,
      subtitleContents: nextSubtitle,
    })
    player.seekTo(nextStart)
  }

  changeSectionRepeat = () => {
    const { sectionRepeat } = this.props
    VideoActions.setYoutube({ sectionRepeat: !sectionRepeat })
  }

  sectionRepeat = currentTime => {
    const { cursor, subtitle, player } = this.props

    if (cursor === 0) {
      this.autoChangeCursor(currentTime)
      return
    }

    if (currentTime > subtitle[cursor].end) {
      const start = subtitle[cursor].start
      player.seekTo(start)
    }
  }

  changeLanguage = () => {
    const { language } = this.props

    if (language === 'ko-en') {
      VideoActions.setYoutube({ language: 'en-ko' })
    } else if (language === 'en-ko') {
      VideoActions.setYoutube({ language: 'ko-en' })
    }
  }

  initialize = () => {
    VideoActions.initialize()
    this.prefetch()
  }

  componentDidMount() {
    this.initialize()
  }

  componentWillUnmount() {
    clearInterval(this.props.timer)
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
        <VideoProgressbar
          currentTime={this.props.currentTime}
          duration={this.props.duration}
        />
        <VideoSubtitle
          contents={this.props.subtitleContents}
          language={this.props.language}
        />
        <VideoControls
          _onStateControl={this._onStateControl}
          playing={this.props.playing}
          language={this.props.language}
          changeLanguage={this.changeLanguage}
          skipPrev={this.skipPrev}
          skipNext={this.skipNext}
          changeSectionRepeat={this.changeSectionRepeat}
        />
      </Fragment>
    )
  }
}

export default connect(state => ({
  video: state.video.video,
  player: state.video.youtube.player,
  timer: state.video.youtube.timer,
  playing: state.video.youtube.playing,
  cursor: state.video.youtube.cursor,
  currentTime: state.video.youtube.currentTime,
  duration: state.video.youtube.duration,
  subtitleContents: state.video.youtube.subtitleContents,
  language: state.video.youtube.language,
  sectionRepeat: state.video.youtube.sectionRepeat,
  subtitle: state.video.video.subtitles,
  loading: state.pender.pending['video/GET_VIDEO'],
}))(VideoContainer)
