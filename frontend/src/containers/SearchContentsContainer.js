import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListActions } from 'store/actionCreators'
import { withRouter } from 'react-router-dom'

import SearchContents from 'components/SearchContents'
import { getKeywordList, removeKeyword, clearKeywords } from 'lib/common'

class SearchContentsContainer extends Component {
  _onSearch = keyword => {
    const { history } = this.props

    ListActions.initialize()
    history.push(`/keyword/${keyword}`)
  }

  componentDidMount() {
    getKeywordList()
  }

  render() {
    return (
      <SearchContents
        recentKeywords={this.props.recentKeywords}
        _onRemove={removeKeyword}
        _onClear={clearKeywords}
        _onSearch={this._onSearch}
      />
    )
  }
}

SearchContentsContainer.propTypes = {
  recentKeywords: PropTypes.array,
}

export default connect(state => ({
  recentKeywords: state.search.recentKeywords,
}))(withRouter(SearchContentsContainer))
