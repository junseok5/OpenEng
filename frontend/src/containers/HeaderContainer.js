import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchActions } from 'store/actionCreators'
import { withRouter } from 'react-router-dom'

import Header from 'components/Header'

class HeaderContainer extends Component {
  _onChange = e => {
    SearchActions.changeSearchForm(e.target.value)
  }

  _onKeyPress = e => {
    if (e.key === 'Enter') {
      this._onSearch()
    }
  }

  _onSearch = () => {
    const { searchForm: keyword, history } = this.props
    history.push(`/keyword/${keyword}`)
  }

  render() {
    return (
      <Header
        searchForm={this.props.searchForm}
        _onChange={this._onChange}
        _onKeyPress={this._onKeyPress}
      />
    )
  }
}

export default connect(state => ({
  searchForm: state.search.searchForm,
}))(withRouter(HeaderContainer))
