import React, { Component } from 'react'
import { connect } from 'react-redux'
import { object } from 'prop-types'

//import { updateActiveSorterId } from '../store/active-sorter/actions'
import Items from '../components/Items'

class ItemsContainer extends Component {
  static propTypes = {
    items: object,
    filters: object,
  }

  render() {
    return (
      <Items
        items={this.props.items}
        filters={this.props.filters} />
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps, {  })(ItemsContainer)
