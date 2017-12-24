import React, { Component } from 'react'
import { object, array } from 'prop-types'

class Filters extends Component {
  handleClick(id, ids, insert) {
    this.props.updateActiveFilterIds(id, ids, insert)
  }

  renderFilter(activeFilters, filters) {
    return Object.keys(filters).map(state => {
      const activeState = (activeFilters.includes(filters[state].id)) ? 'active' : 'inactive'

      return (
        <p
          className={`filter option ${activeState}`}
          key={filters[state].id}
          onClick={() => this.handleClick(filters[state].id, activeFilters, true)}>
          {filters[state].title}
        </p>
      )
    })
  }

  render() {
    return (
      <div className="navigation-element filters-element">
        <p className="title">Filter by states</p>
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
