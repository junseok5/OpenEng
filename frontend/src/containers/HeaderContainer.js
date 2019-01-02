import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SearchActions } from 'store/actionCreators'
import { withRouter } from 'react-router-dom'

import Header from 'components/Header'
import { writeTag, getTagList, removeTag, clearTags } from 'lib/common'

class HeaderContainer extends Component {
  _onSearch = tag => {
    SearchActions.changeView({ mouseOver: false })

    writeTag(tag)

    const { history } = this.props
    if (tag) {
      history.push(`/tag/${tag}`)
      SearchActions.changeForm(tag)
      return
    }

    const { form } = this.props

    writeTag(form)
    history.push(`/tag/${form}`)
  }

  _onFocus = () => {
    SearchActions.changeView({ focus: true })

    const { recentTags } = this.props
    if (recentTags.length === 0) {
      getTagList()
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
        recentTags={this.props.recentTags}
        view={this.props.view}
        _onChange={this._onChange}
        _onKeyPress={this._onKeyPress}
        _onSearch={this._onSearch}
        _onFocus={this._onFocus}
        _onBlur={this._onBlur}
        _onMouseOver={this._onMouseOver}
        _onMouseOut={this._onMouseOut}
        _onRemove={removeTag}
        _onClear={clearTags}
      />
    )
  }
}

HeaderContainer.propTypes = {
  form: PropTypes.string,
  recentTags: PropTypes.array,
  view: PropTypes.object,
}

export default connect(state => ({
  form: state.search.form,
  recentTags: state.search.recentTags,
  view: state.search.view,
}))(withRouter(HeaderContainer))
