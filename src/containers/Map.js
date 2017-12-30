import React, { Component } from 'react'
import { connect } from 'react-redux'
import { object } from 'prop-types'

import Map from '../components/Map'

class MapContainer extends Component {
  static propTypes = {
    items: object,
    history: object,
  }

  render() {
    const { items, history } = this.props
    return (
      <Map items={items} history={history} />
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  }
}

export default connect(mapStateToProps)(MapContainer)
