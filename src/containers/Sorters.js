import React, { Component } from 'react'
import { connect } from 'react-redux'
import { object, func, string } from 'prop-types'

import {
  fetchActiveSorterId,
  updateActiveSorterId,
} from '../store/active-sorter/actions'
import Sorters from '../components/Sorters'

class SortersContainer extends Component {
  static propTypes = {
    fetchActiveSorterId: func,
    updateActiveSorterId: func,
    sorters: object,
    activeSorter: string,
  }

  componentDidMount() {
    this.props.fetchActiveSorterId('sorter_name')
  }

  render() {
    console.log('this.props.sorters', this.props.activeSorter)
    return (
      <Sorters
        sorters={this.props.sorters}
        activeSorter={this.props.activeSorter} />
    )
  }
}

function mapStateToProps(state) {
  return {
    activeSorter: state.activeSorter
  }
}

export default connect(mapStateToProps, {
  fetchActiveSorterId,
  updateActiveSorterId,
})(SortersContainer)
