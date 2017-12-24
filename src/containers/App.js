import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { object, func } from 'prop-types'

import { fetchData } from '../store/data/actions'
import { fetchSorters } from '../store/sorters/actions'

import App from '../components/App'

class AppContainer extends Component {
  static propTypes = {
    fetchData: func,
    fetchSorters: func,
    data: object,
    sorters: object,
  }

  state = {
    isLoading: true
  }

  componentDidMount() {
    this.props.fetchData()
      .then(this.props.fetchSorters())
      .then(() => this.setState({ isLoading: false }))
  }

  render() {
    return (
      <App
        isLoading={this.state.isLoading}
        data={this.props.data}
        sorters={this.props.sorters}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    sorters: state.sorters,
  }
}

export default withRouter(connect(mapStateToProps, {
  fetchData,
  fetchSorters,
})(AppContainer))
