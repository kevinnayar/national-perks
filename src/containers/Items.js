import React, { Component } from 'react'
import { connect } from 'react-redux'
import { object, array } from 'prop-types'

import Items from '../components/Items'

class ItemsContainer extends Component {
  static propTypes = {
    items: object,
    filters: object,
    activeFilters: array,
    sorters: object,
    activeSorter: object,
  }

  render() {
    const {
      items,
      filters,
      activeFilters,
      sorters,
      activeSorter
    } = this.props

    return (
      <Items
        items={items}
        filters={filters}
        activeFilters={activeFilters}
        sorters={sorters}
        activeSorter={activeSorter} />
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    filters: state.filters,
    activeFilters: state.activeFilters,
    sorters: state.sorters,
    activeSorter: state.activeSorter,
  }
}

export default connect(mapStateToProps)(ItemsContainer)
