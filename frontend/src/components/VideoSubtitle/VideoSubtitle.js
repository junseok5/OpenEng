import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './VideoSubtitle.scss'

import Loading from 'react-loading'
import { FiSlack } from 'react-icons/fi'

const VideoSubtitle = ({
  playerReady,
  initPlay,
  contents,
  language,
  words,
  isMainSentance
}) => {
  const wordList =
    words.length > 0 &&
    words.map((word, i) => {
      return (
        <div className={cx('word')} key={i}>
          <div className={cx('word-en')}>※{word.en}</div>
          <div className={cx('word-ko')}>{word.ko}</div>
        </div>
      )
    })
  const viewIntro = playerReady && !initPlay

  return (
    <div className={cx('video-subtitle')}>
      <div className={cx('subtitle-contents')}>
        {!playerReady && (
          <div className={cx('before-start')}>
            <Loading type='spin' color='#ff2f6e' />
          </div>
        )}
        {viewIntro && (
          <div className={cx('before-start')}>
            <div className={cx('bs-icon')}>
              <FiSlack fontSize='2.5rem' />
            </div>
            <div className={cx('bs-text')}>핵심 문장은 3회 반복됩니다.</div>
          </div>
        )}

        <div
          className={cx('front-subtitle', isMainSentance && 'view-subtitle')}
        >
          {language === 'ko-en' && contents.ko}
          {language === 'en-ko' && <span>{contents.en}</span>}
          {language === 'ko' && contents.ko}
          {language === 'en' && <span>{contents.en}</span>}
        </div>
        <div className={cx('back-subtitle', isMainSentance && 'view-subtitle')}>
          {language === 'ko-en' && <span>{contents.en}</span>}
          {language === 'en-ko' && contents.ko}
        </div>
        <div className={cx('words')}>
          {language === 'ko-en' && wordList}
          {language === 'en-ko' && wordList}
        </div>
      </div>
    </div>
  )
}

VideoSubtitle.defaultProps = {
  initPlay: false,
  contents: {
    en: '',
    ko: ''
  },
  language: 'ko-en',
  words: [],
  isMainSentance: false
}

VideoSubtitle.propTypes = {
  initPlay: PropTypes.bool,
  contents: PropTypes.object,
  language: PropTypes.string,
  words: PropTypes.array,
  isMainSentance: PropTypes.bool
}

export default VideoSubtitle
