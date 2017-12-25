import React, { Component } from 'react'
import { object, string } from 'prop-types'

class Sorters extends Component {
  handleClick(id, ids) {
    this.props.updateActiveSorterId(id)
  }

  renderSorter(activeSorter, sorters) {
    return Object.keys(sorters).map(sorter => {
      const activeState = (activeSorter === sorters[sorter].id) ? 'active' : 'inactive'

      return (
        <p
          className={`sorter option ${activeState}`}
          key={sorters[sorter].id}
          onClick={() => this.handleClick(sorters[sorter].id)}>
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
          {this.renderSorter(this.props.activeSorter, this.props.sorters)}
        </div>
      </div>
    )
  }
}

Sorters.propTypes = {
  sorters: object,
  activeSorter: string,
}

export default Sorters
