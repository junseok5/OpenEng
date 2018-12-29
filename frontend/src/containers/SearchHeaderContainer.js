import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchActions, ListActions } from 'store/actionCreators'
import { withRouter } from 'react-router-dom'

import SearchHeader from 'components/SearchHeader'
import storage from 'lib/storage'

class SearchHeaderContainer extends Component {
  writeStorage = keyword => {
    let patchData = [keyword]
    const originData = storage.get('keywords')

    if (originData) {
      patchData = patchData.concat(originData)
    }

    storage.set('keywords', patchData)
  }

  _onSearch = () => {
    const { form: keyword, history } = this.props

    this.writeStorage(keyword)
    ListActions.initialize()
    history.push(`/keyword/${keyword}`)
  }

  _onChange = e => {
    SearchActions.changeForm(e.target.value)
  }

  _onKeyPress = e => {
    if (e.key === 'Enter') {
      this._onSearch()
    }
  }

  goBack = () => {
    this.props.history.goBack()
  }

  componentDidMount() {
    SearchActions.initialize()
  }

  render() {
    return (
      <SearchHeader
        form={this.props.form}
        _onChange={this._onChange}
        _onKeyPress={this._onKeyPress}
        goBack={this.goBack}
      />
    )
  }
}

export default connect(state => ({
  form: state.search.form,
}))(withRouter(SearchHeaderContainer))
