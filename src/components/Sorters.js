import React, { Component } from 'react'
import { object } from 'prop-types'

class Sorters extends Component {
  renderSorter(sorters) {
    return Object.keys(sorters).map(sorter => {
      //const activeState = (activeSorters.includes(sorters[state].id)) ? 'active' : 'inactive'

      return (
        <p
          className={`sorter option`}
          key={sorters[sorter].id}>
          {sorters[sorter].title}
        </p>
      )
    })
  }

  render() {
    return (
      <div className="navigation-element sorters-element">
        <p className="title">Sort options</p>
        <div className="sorters">
          {this.renderSorter(this.props.sorters)}
        </div>
      </div>
    )
  }
}

Sorters.propTypes = {
  sorters: object,
}

export default Sorters
