import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SearchActions } from 'store/actionCreators'
import { withRouter } from 'react-router-dom'

import Header from 'components/Header'
import {
  writeKeyword,
  getKeywordList,
  removeKeyword,
  clearKeywords,
} from 'lib/common'

class HeaderContainer extends Component {
  _onSearch = keyword => {
    SearchActions.changeView({ mouseOver: false })

    const { history } = this.props
    if (keyword) {
      history.push(`/keyword/${keyword}`)
      SearchActions.changeForm(keyword)
      writeKeyword(keyword)
      return
    }

    const { form } = this.props

    writeKeyword(form)
    history.push(`/keyword/${form}`)
  }

  _onFocus = () => {
    SearchActions.changeView({ focus: true })

    const { recentKeywords } = this.props
    if (recentKeywords.length === 0) {
      getKeywordList()
    }
  }

  _onBlur = () => {
    SearchActions.changeView({ focus: false })
  }

  _onMouseOver = () => {
    SearchActions.changeView({ mouseOver: true })
  }

  _onMouseOut = () => {
    SearchActions.changeView({ mouseOver: false })
  }

  _onChange = e => {
    SearchActions.changeForm(e.target.value)
  }

  _onKeyPress = e => {
    if (e.key === 'Enter') {
      this._onSearch()
      e.target.blur()
    }
  }

  render() {
    return (
      <Header
        form={this.props.form}
        recentKeywords={this.props.recentKeywords}
        view={this.props.view}
        _onChange={this._onChange}
        _onKeyPress={this._onKeyPress}
        _onSearch={this._onSearch}
        _onFocus={this._onFocus}
        _onBlur={this._onBlur}
        _onMouseOver={this._onMouseOver}
        _onMouseOut={this._onMouseOut}
        _onRemove={removeKeyword}
        _onClear={clearKeywords}
      />
    )
  }
}

HeaderContainer.propTypes = {
  form: PropTypes.string,
  recentKeywords: PropTypes.array,
  view: PropTypes.object,
}

export default connect(state => ({
  form: state.search.form,
  recentKeywords: state.search.recentKeywords,
  view: state.search.view,
}))(withRouter(HeaderContainer))
