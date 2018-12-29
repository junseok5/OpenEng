import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchActions } from 'store/actionCreators'
import { withRouter } from 'react-router-dom'

import SearchHeader from 'components/SearchHeader'

class SearchHeaderContainer extends Component {
  _onSearch = () => {
    const { form: keyword, history } = this.props
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

  render() {
    return (
      <SearchHeader
        form={this.props.form}
        _onChange={this._onChange}
        _onKeyPress={this._onKeyPress}
      />
    )
  }
}

export default connect(state => ({
  form: state.search.form,
}))(withRouter(SearchHeaderContainer))
