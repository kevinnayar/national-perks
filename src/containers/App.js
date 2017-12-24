import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { object, func } from 'prop-types'

import { fetchData } from '../store/data/actions'
import App from '../components/App'

class AppContainer extends Component {
  static propTypes = {
    fetchData: func,
    data: object,
  }

  state = {
    isLoading: true
  }

  componentDidMount() {
    this.props.fetchData().then(() => this.setState({ isLoading: false }))
  }

  render() {
    return (
      <App
        isLoading={this.state.isLoading}
        data={this.props.data}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  }
}

export default withRouter(connect(mapStateToProps, { fetchData })(AppContainer))
