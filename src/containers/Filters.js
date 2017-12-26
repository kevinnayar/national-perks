import React, { Component } from 'react'
import { connect } from 'react-redux'
import { object, func, array } from 'prop-types'

import {
  fetchActiveFilterIds,
  updateActiveFilterIds,
  bulkUpdateActiveFilterIds,
} from '../store/active-filters/actions'
import Filters from '../components/Filters'

class FiltersContainer extends Component {
  static propTypes = {
    fetchActiveFilterIds: func,
    updateActiveFilterIds: func,
    bulkUpdateActiveFilterIds: func,
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
        updateActiveFilterIds={this.props.updateActiveFilterIds}
        bulkUpdateActiveFilterIds={this.props.bulkUpdateActiveFilterIds} />
    )
  }
}

function mapStateToProps(state) {
  return {
    filters: state.filters,
    activeFilters: state.activeFilters,
  }
}

export default connect(mapStateToProps, {
  fetchActiveFilterIds,
  updateActiveFilterIds,
  bulkUpdateActiveFilterIds,
})(FiltersContainer)
