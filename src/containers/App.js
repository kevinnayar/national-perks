import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { object, func } from 'prop-types'

import { fetchData } from '../store/data/actions'
import { fetchItems } from '../store/items/actions'
import { fetchFilters } from '../store/filters/actions'
import { fetchSorters } from '../store/sorters/actions'

import App from '../components/App'

class AppContainer extends Component {
  static propTypes = {
    fetchData: func,
    fetchItems: func,
    fetchFilters: func,
    fetchSorters: func,
    items: object,
    filters: object,
    sorters: object,
  }

  state = {
    isLoading: true
  }

  componentDidMount() {
    this.props.fetchData()
      .then((data) => {
        return Promise.all([
          this.props.fetchItems(data),
          this.props.fetchFilters(data),
          this.props.fetchSorters(),
        ]).then(() => {
          this.setState({ isLoading: false })
        })
      })
  }

  render() {
    return (
      <App isLoading={this.state.isLoading} />
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    filters: state.filters,
    sorters: state.sorters,
  }
}

export default withRouter(connect(mapStateToProps, {
  fetchData,
  fetchItems,
  fetchFilters,
  fetchSorters,
})(AppContainer))
