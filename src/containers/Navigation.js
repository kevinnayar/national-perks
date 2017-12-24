import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { object, func } from 'prop-types'

import Navigation from '../components/Navigation'

class NavigationContainer extends Component {
  static propTypes = {
    filters: object,
    sorters: object,
  }

  render() {
    console.log('this.props.filters)', this.props.filters)
    console.log('this.props.sorters)', this.props.sorters)
    return (
      <Navigation
        filters={this.props.filters}
        sorters={this.props.sorters} />
    )
  }
}

function mapStateToProps(state) {
  return {
    sorters: state.sorters,
  }
}

export default withRouter(connect(mapStateToProps, {})(NavigationContainer))
