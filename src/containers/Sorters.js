import React, { Component } from 'react'
import { connect } from 'react-redux'
import { object, func, string } from 'prop-types'

import { updateActiveSorterId } from '../store/active-sorter/actions'
import Sorters from '../components/Sorters'

class SortersContainer extends Component {
  static propTypes = {
    updateActiveSorterId: func,
    sorters: object,
    activeSorter: string,
  }

  componentDidMount() {
    this.props.updateActiveSorterId('sorter_name')
  }

  render() {
    return (
      <Sorters
        sorters={this.props.sorters}
        activeSorter={this.props.activeSorter}
        updateActiveSorterId={this.props.updateActiveSorterId} />
    )
  }
}

function mapStateToProps(state) {
  return {
    activeSorter: state.activeSorter
  }
}

export default connect(mapStateToProps, { updateActiveSorterId })(SortersContainer)
