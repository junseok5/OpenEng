import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SearchActions, ListActions } from 'store/actionCreators'
import { withRouter } from 'react-router-dom'

import SearchHeader from 'components/search/SearchHeader'
import { writeKeyword } from 'lib/common'

class SearchHeaderContainer extends Component {
  _onSearch = () => {
    const { form: keyword, history } = this.props

    writeKeyword(keyword)
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

  _goBack = () => {
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
        _onSearch={this._onSearch}
        _goBack={this._goBack}
      />
    )
  }
}

SearchHeaderContainer.propTypes = {
  form: PropTypes.string,
  keyword: PropTypes.string,
}

export default connect(state => ({
  form: state.search.form,
}))(withRouter(SearchHeaderContainer))
