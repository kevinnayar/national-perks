import React, { Component } from 'react'
import { connect } from 'react-redux'
import { object, array } from 'prop-types'

//import { updateActiveSorterId } from '../store/active-sorter/actions'
import Items from '../components/Items'

class ItemsContainer extends Component {
  static propTypes = {
    items: object,
    filters: object,
    activeFilters: array,
  }

  render() {
    return (
      <Items
        items={this.props.items}
        filters={this.props.filters}
        activeFilters={this.props.activeFilters} />
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    filters: state.filters,
    activeFilters: state.activeFilters,
  }
}

export default connect(mapStateToProps, {  })(ItemsContainer)
