import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { VideoActions } from 'store/actionCreators'

import Video from 'components/Video'
import VideoProgressbar from 'components/VideoProgressbar'
import VideoSubtitle from 'components/VideoSubtitle'
import VideoControls from 'components/VideoControls'
import { Helmet } from 'react-helmet'

class VideoContainer extends Component {
  _prefetch = async () => {
    const { id } = this.props

    try {
      await VideoActions.getVideo(id)
    } catch (e) {
      console.log(e)
    }
  }

  _onReady = e => {
    console.log(e.target)

    this._listenKeyEvent()
    VideoActions.setYoutube({
      playerReady: true,
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

    /*
      playerState
        -1: 시작되지 않음
        0: 종료됨
        1: 재생중
        2: 일시중지됨
        3: 버퍼링 중
        5: 동영상 신호
    */
    if (playerState === 1) {
      if (!this.props.initPlay) {
        VideoActions.setYoutube({ initPlay: true })
      }

      const timer = setInterval(() => {
        const { sectionRepeat, subtitle, cursor } = this.props
        const currentTime = player.getCurrentTime()

        VideoActions.setYoutube({ currentTime, playing: true })

        // 구간 반복
        if (sectionRepeat) {
          this._sectionRepeat(currentTime)
          return
        }

        // 주요 문장 3회 반복
        if (subtitle[cursor].mainSentance) {
          this._repeatMainSentance(player, currentTime, subtitle, cursor)
          return
        }

        this._autoChangeCursor(currentTime)
      }, 100)

      VideoActions.setYoutube({ timer })
    } else if (playerState === 3) {
      clearInterval(this.props.timer)
    } else if (playerState === 0) {
      VideoActions.setYoutube({
        playing: false,
        cursor: 0,
        subtitleContents: { en: '', ko: '' },
        repeatCount: 0,
      })
      clearInterval(this.props.timer)
    } else {
      VideoActions.setYoutube({ playing: false })
      clearInterval(this.props.timer)
    }
  }

  _repeatMainSentance = (player, currentTime, subtitle, cursor) => {
    const { repeatCount } = this.props

    if (repeatCount < 3 && currentTime >= subtitle[cursor].end) {
      const start = subtitle[cursor].start
      player.seekTo(start)
      VideoActions.setYoutube({ repeatCount: repeatCount + 1 })
    } else if (repeatCount >= 3) {
      this._autoChangeCursor(currentTime)
    }
  }

  _autoChangeCursor = currentTime => {
    const { cursor, subtitle } = this.props

    if (!this.props.subtitle || cursor >= subtitle.length - 1) return

    if (currentTime >= subtitle[cursor + 1].start) {
      VideoActions.setYoutube({
        cursor: cursor + 1,
        subtitleContents: subtitle[cursor + 1].contents,
      })
    }
  }

  _skipPrev = () => {
    const { cursor, player, subtitle } = this.props

    if (cursor === 0) return
    const prevCursor = cursor - 1
    const prevStart = subtitle[prevCursor].start
    const prevSubtitle = subtitle[prevCursor].contents

    if (subtitle[prevCursor].mainSentance) {
      VideoActions.setYoutube({ repeatCount: 0 })
    }

    VideoActions.setYoutube({
      cursor: prevCursor,
      subtitleContents: prevSubtitle,
    })
    player.seekTo(prevStart)
  }

  _skipNext = () => {
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

  _changeSectionRepeat = () => {
    const { sectionRepeat } = this.props
    VideoActions.setYoutube({ sectionRepeat: !sectionRepeat })
  }

  _sectionRepeat = currentTime => {
    const { cursor, subtitle, player } = this.props

    if (cursor === 0) {
      this._autoChangeCursor(currentTime)
      return
    }

    if (currentTime > subtitle[cursor].end) {
      const start = subtitle[cursor].start
      player.seekTo(start)
    }
  }

  _changeLanguage = () => {
    const { language } = this.props

    if (language === 'en-ko') {
      VideoActions.setYoutube({ language: 'ko-en' })
    } else if (language === 'ko-en') {
      VideoActions.setYoutube({ language: 'en' })
    } else if (language === 'en') {
      VideoActions.setYoutube({ language: 'ko' })
    } else if (language === 'ko') {
      VideoActions.setYoutube({ language: 'hide' })
    } else if (language === 'hide') {
      VideoActions.setYoutube({ language: 'en-ko' })
    }
  }

  _listenKeyEvent = () => {
    document.onkeydown = e => {
      e = e || window.event
      const key = {
        a: 65,
        s: 83,
        d: 68,
        f: 70,
        q: 81,
      }

      if (e.keyCode === key['a']) {
        this._skipPrev()
      } else if (e.keyCode === key['s']) {
        this._onStateControl()
      } else if (e.keyCode === key['d']) {
        this._skipNext()
      } else if (e.keyCode === key['f']) {
        this._changeSectionRepeat()
      } else if (e.keyCode === key['q']) {
        this._changeLanguage()
      }
    }
  }

  _initialize = () => {
    VideoActions.initialize()
    this._prefetch()
  }

  componentDidMount() {
    this._initialize()
  }

  componentWillUnmount() {
    clearInterval(this.props.timer)
  }

  render() {
    if (!this.props.video.youtubeId || this.props.loading) return null

    return (
      <Fragment>
        <Helmet>
          <title>{this.props.video.title}</title>
          <meta property="og:title" content={this.props.video.title} />
          <meta property="og:type" content="video.movie" />
          {/* <meta property="og:url" content="" /> */}
          <meta
            property="og:image"
            content={`https://img.youtube.com/vi/${
              this.props.video.youtubeId
            }/mqdefault.jpg`}
          />
          <meta
            property="og:description"
            content={
              this.props.video.sentance.en + ' ' + this.props.video.sentance.ko
            }
          />
        </Helmet>
        <Video
          youtubeId={this.props.video.youtubeId}
          _onReady={this._onReady}
          _onStateChange={this._onStateChange}
        />
        <VideoProgressbar
          currentTime={this.props.currentTime}
          duration={this.props.duration}
        />
        <VideoSubtitle
          playerReady={this.props.playerReady}
          initPlay={this.props.initPlay}
          contents={this.props.subtitleContents}
          language={this.props.language}
          words={this.props.subtitle[this.props.cursor].words}
          isMainSentance={
            this.props.subtitle[this.props.cursor].mainSentance
              ? this.props.subtitle[this.props.cursor].mainSentance
              : false
          }
        />
        <VideoControls
          playerReady={this.props.playerReady}
          playing={this.props.playing}
          language={this.props.language}
          sectionRepeat={this.props.sectionRepeat}
          _onStateControl={this._onStateControl}
          _changeLanguage={this._changeLanguage}
          _skipPrev={this._skipPrev}
          _skipNext={this._skipNext}
          _changeSectionRepeat={this._changeSectionRepeat}
        />
      </Fragment>
    )
  }
}

VideoContainer.propTypes = {
  id: PropTypes.string,
  video: PropTypes.object,
  player: PropTypes.object,
  playerReady: PropTypes.bool,
  timer: PropTypes.number,
  playing: PropTypes.bool,
  cursor: PropTypes.number,
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  subtitleContents: PropTypes.object,
  language: PropTypes.string,
  sectionRepeat: PropTypes.bool,
  initPlay: PropTypes.bool,
  repeatCount: PropTypes.number,
  subtitle: PropTypes.array,
  loading: PropTypes.bool,
}

export default connect(state => ({
  video: state.video.video,
  player: state.video.youtube.player,
  playerReady: state.video.youtube.playerReady,
  timer: state.video.youtube.timer,
  playing: state.video.youtube.playing,
  cursor: state.video.youtube.cursor,
  currentTime: state.video.youtube.currentTime,
  duration: state.video.youtube.duration,
  subtitleContents: state.video.youtube.subtitleContents,
  language: state.video.youtube.language,
  sectionRepeat: state.video.youtube.sectionRepeat,
  initPlay: state.video.youtube.initPlay,
  repeatCount: state.video.youtube.repeatCount,
  subtitle: state.video.video.subtitle,
  loading: state.pender.pending['video/GET_VIDEO'],
}))(VideoContainer)
