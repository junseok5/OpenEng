import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchActions } from 'store/actionCreators'

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
    console.log(index, originData, removedData)

    storage.set('keywords', removedData)
    SearchActions.writeRecentKeywords(removedData)
  }

  clearKeywords = () => {
    storage.set('keywords', [])
    SearchActions.writeRecentKeywords([])
  }

  componentDidMount() {
    this.getKeywordList()
  }

  render() {
    return (
      <SearchContents
        recentKeywords={this.props.recentKeywords}
        onRemove={this.removeKeyword}
        onClear={this.clearKeywords}
      />
    )
  }
}

export default connect(state => ({
  recentKeywords: state.search.recentKeywords,
}))(SearchContentsContainer)
