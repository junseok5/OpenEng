import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListActions } from 'store/actionCreators'
import { withRouter } from 'react-router-dom'

import SearchContents from 'components/SearchContents'
import { getTagList, removeTag, clearTags } from 'lib/common'

class SearchContentsContainer extends Component {
  _onSearch = tag => {
    const { history } = this.props

    ListActions.initialize()
    history.push(`/tag/${tag}`)
  }

  componentDidMount() {
    getTagList()
  }

  render() {
    return (
      <SearchContents
        recentTags={this.props.recentTags}
        _onRemove={removeTag}
        _onClear={clearTags}
        _onSearch={this._onSearch}
      />
    )
  }
}

SearchContentsContainer.propTypes = {
  recentTags: PropTypes.array,
}

export default connect(state => ({
  recentTags: state.search.recentTags,
}))(withRouter(SearchContentsContainer))
