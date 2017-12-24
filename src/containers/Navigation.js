import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { object, func } from 'prop-types'

import { fetchSorters } from '../store/sorters/actions'
import Navigation from '../components/Navigation'

class NavigationContainer extends Component {
  static propTypes = {
    fetchFilters: func,
    fetchSorters: func,
    filters: object,
    sorters: object,
  }

  componentDidMount() {
    this.props.fetchSorters()
  }

  render() {
    return (
      <Navigation
        filters={this.props.filters}
        sorters={this.props.sorters}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    filters: state.data.states,
    sorters: state.sorters,
  }
}

export default withRouter(connect(mapStateToProps, { fetchSorters })(NavigationContainer))
