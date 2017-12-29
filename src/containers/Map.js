import React, { Component } from 'react'
import { connect } from 'react-redux'
import { object } from 'prop-types'

import Map from '../components/Map'

class MapContainer extends Component {
  static propTypes = {
    items: object,
  }

  render() {
    return (
      <Map items={this.props.items} />
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  }
}

export default connect(mapStateToProps)(MapContainer)
