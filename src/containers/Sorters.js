import React, { Component } from 'react'
import { connect } from 'react-redux'
import { object, func } from 'prop-types'

import { updateActiveSorter } from '../store/active-sorter/actions'
import Sorters from '../components/Sorters'

class SortersContainer extends Component {
  static propTypes = {
    updateActiveSorter: func,
    activeSorter: object,
  }

  render() {
    const {
      sorters,
      activeSorter,
      updateActiveSorter
    } = this.props

    return (
      <Sorters
        sorters={sorters}
        activeSorter={activeSorter}
        updateActiveSorter={updateActiveSorter} />
    )
  }
}

function mapStateToProps(state) {
  return {
    sorters: state.sorters,
    activeSorter: state.activeSorter,
  }
}

export default connect(mapStateToProps, { updateActiveSorter })(SortersContainer)
