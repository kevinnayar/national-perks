import React, { Component } from 'react'
import { object, array } from 'prop-types'

class Filters extends Component {
  handleFilterClick(id, ids) {
    this.props.updateActiveFilterIds(id, ids)
  }

  handleSelectAllClick(ids) {
    const allIds = Object.keys(ids).map(id => ids[id].id)
    this.props.bulkUpdateActiveFilterIds(allIds)
  }

  handleClearAllClick() {
    this.props.bulkUpdateActiveFilterIds([])
  }

  renderFilter(activeFilters, filters) {
    return Object.keys(filters).sort().map(state => {
      const activeState = (activeFilters.includes(filters[state].id)) ? 'active' : 'inactive'

      return (
        <div
          className={`filter option ${activeState}`}
          key={filters[state].id}
          onClick={() => this.handleFilterClick(filters[state].id, activeFilters)}>
          {(activeState === 'active') ?
            <i className="material-icons">check_box</i> : 
            <i className="material-icons">check_box_outline_blank</i>
          }
          <p>{filters[state].title}</p>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="navigation-element filters-element">
        <p className="title">Filter by states</p>
        <div className="meta-controls">
          <p
            className="select-all meta-control"
            onClick={() => this.handleSelectAllClick(this.props.filters)}>
            Select All
          </p>
          <p
            className="clear-all meta-control"
            onClick={() => this.handleClearAllClick(this.props.activeFilters, this.props.filters)}>
            Clear All
          </p>
        </div>
        <div className="filters">
          {this.renderFilter(this.props.activeFilters, this.props.filters)}
        </div>
      </div>
    )
  }
}

Filters.propTypes = {
  filters: object,
  activeFilters: array,
}

export default Filters
