import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchActions, ListActions } from 'store/actionCreators'
import { withRouter } from 'react-router-dom'

import SearchContents from 'components/SearchContents'
import storage from 'lib/storage'

class SearchContentsContainer extends Component {
  getKeywordList = async () => {
    const keywords = await storage.get('keywords')
    SearchActions.writeRecentKeywords(keywords)
  }

  removeKeyword = index => {
    let originData = storage.get('keywords')
    originData.splice(index, 1)

    const removedData = originData

    storage.set('keywords', removedData)
    SearchActions.writeRecentKeywords(removedData)
  }

  clearKeywords = () => {
    storage.set('keywords', [])
    SearchActions.writeRecentKeywords([])
  }

  _onSearch = keyword => {
    const { history } = this.props

    ListActions.initialize()
    history.push(`/keyword/${keyword}`)
  }

  componentDidMount() {
    this.getKeywordList()
  }

  render() {
    return (
      <SearchContents
        recentKeywords={this.props.recentKeywords}
        _onRemove={this.removeKeyword}
        _onClear={this.clearKeywords}
        _onSearch={this._onSearch}
      />
    )
  }
}

export default connect(state => ({
  recentKeywords: state.search.recentKeywords,
}))(withRouter(SearchContentsContainer))
