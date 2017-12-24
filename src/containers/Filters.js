import React, { Component } from 'react'
import { connect } from 'react-redux'
import { object, func, array } from 'prop-types'

import {
  fetchActiveFilterIds,
  updateActiveFilterIds
} from '../store/active-filters/actions'
import Filters from '../components/Filters'

class FiltersContainer extends Component {
  static propTypes = {
    fetchActiveFilterIds: func,
    updateActiveFilterIds: func,
    filters: object,
    activeFilters: array,
  }

  componentDidMount() {
    this.props.fetchActiveFilterIds(this.props.filters)
  }

  render() {
    return (
      <Filters
        filters={this.props.filters}
        activeFilters={this.props.activeFilters}
        updateActiveFilterIds={this.props.updateActiveFilterIds} />
    )
  }
}

function mapStateToProps(state) {
  return {
    activeFilters: state.activeFilters
  }
}

export default connect(mapStateToProps, { fetchActiveFilterIds, updateActiveFilterIds })(FiltersContainer)
