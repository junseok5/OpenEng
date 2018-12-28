import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchActions } from 'store/actionCreators'

import Header from 'components/Header'

class HeaderContainer extends Component {
  _onChange = e => {
    SearchActions.changeSearchForm(e.target.value)
  }

  _onKeyPress = e => {}

  submitSearch = () => {}

  render() {
    return (
      <Header searchForm={this.props.searchForm} _onChange={this._onChange} />
    )
  }
}

export default connect(state => ({
  searchForm: state.search.searchForm,
}))(HeaderContainer)
