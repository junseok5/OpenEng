import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SearchActions, ListActions } from 'store/actionCreators'
import { withRouter } from 'react-router-dom'

import SearchHeader from 'components/SearchHeader'
import { writeTag } from 'lib/common'

class SearchHeaderContainer extends Component {
  _onSearch = () => {
    const { form: tag, history } = this.props

    writeTag(tag)
    ListActions.initialize()
    history.push(`/tag/${tag}`)
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
  tag: PropTypes.string,
}

export default connect(state => ({
  form: state.search.form,
}))(withRouter(SearchHeaderContainer))
