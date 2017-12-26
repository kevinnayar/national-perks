import React, { Component } from 'react'
import { object } from 'prop-types'

class Sorters extends Component {
  handleClick(id, dir) {
    this.props.updateActiveSorter(id, dir)
  }

  renderSorter(activeSorter, sorters) {
    return Object.keys(sorters).map(sorter => {
      const activeState = (activeSorter.id === sorters[sorter].id) ? 'active' : 'inactive'

      return (
        <div
          className={`sorter option ${activeState}`}
          key={sorters[sorter].id}>
          <i
            className="material-icons icon-right"
            onClick={() => this.handleClick(sorters[sorter].id, 'asc')}>
            keyboard_arrow_down
          </i>
          <p>{sorters[sorter].title}</p>
        </div>
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
  activeSorter: object,
}

export default Sorters

/*

<i
  className="material-icons icon-left"
  onClick={() => this.handleClick(sorters[sorter].id, 'desc')}>
  keyboard_arrow_up
</i>

*/
