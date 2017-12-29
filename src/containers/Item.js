import React, { Component } from 'react'
import { connect } from 'react-redux'
import { object, func, string } from 'prop-types'

import {
  fetchActiveItem,
} from '../store/active-item/actions'
import Item from '../components/Item'

class ItemContainer extends Component {
  static propTypes = {
    fetchActiveItem: func,
    items: object,
    activeItemId: string,
    activeItem: object,
    filters: object,
  }

  componentDidMount() {
    this.props.fetchActiveItem(this.props.activeItemId, this.props.items)
  }

  render() {
    return (
      <Item
        activeItem={this.props.activeItem}
        filters={this.props.filters} />
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    activeItem: state.activeItem,
    filters: state.filters,
  }
}

export default connect(mapStateToProps, { fetchActiveItem })(ItemContainer)
