import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { object, array } from 'prop-types'

class Items extends Component {
  sortItems(items, sorters, activeSorterId) {
    let sortedItems = Object.keys(items).map(park => items[park])

    switch (activeSorterId) {
      case 'sorter_name': {
        sortedItems.sort((a, b) => (a.title > b.title) ? 1 : (b.title > a.title) ? -1 : 0)
        break
      }

      case 'sorter_park-size': {
        sortedItems.sort((a, b) => {
          const sizeA = parseFloat(a.area.acres.replace(/,/g,''))
          const sizeB = parseFloat(b.area.acres.replace(/,/g,''))
          return (sizeB > sizeA) ? 1 : (sizeA > sizeB) ? -1 : 0
        })
        break
      }

      case 'sorter_annual-visitors': {
        sortedItems.sort((a, b) => {
          const visitorsA = parseFloat(a.visitors.replace(/,/g,''))
          const visitorsB = parseFloat(b.visitors.replace(/,/g,''))
          return (visitorsB > visitorsA) ? 1 : (visitorsA > visitorsB) ? -1 : 0
        })
        break
      }

      case 'sorter_date-established': {
        sortedItems.sort((a, b) => (a.date_established_unix > b.date_established_unix) ? 1 : (b.date_established_unix > a.date_established_unix) ? -1 : 0)
        break
      }

      default: {
        sortedItems.sort((a, b) => (a.title > b.title) ? 1 : (b.title > a.title) ? -1 : 0)
      }
    }

    return sortedItems
  }

  renderItem(items, filters, activeFilters, sorters, activeSorter) {
    const sortedItems = this.sortItems(items, sorters, activeSorter.id)

    return sortedItems.map(park => {
      let activeState = park.states.map(state => activeFilters.includes(state))
      activeState = activeState.includes(true) ? 'active' : 'inactive'

      return (
        <div
          className={`item ${activeState}`}
          key={park.id}>
          <Link to={`/park/${park.title.replace(/ /g, '-').toLowerCase()}`}>
            <img
              className="image"
              src={`/images/thumbnails/${park.image.url}`}
              alt={park.title} />
            <h1 className="title">{park.title}</h1>

            <ul className="state-list">
              {park.states.map(state => {
                return (
                  <li
                    className="state"
                    key={`${park.id}:${state}`}>
                      {filters[state].title}
                    </li>
                  )
              })}
            </ul>

            {park.world_heritage_site && (
              <div className="world-heritage-site">
                <img
                  className="icon"
                  src="/images/world-heritage-site.svg"
                  alt="World Heritage Site" />
                <div className="tooltip-arrow" />
                <p className="tooltip">
                  This U.S. Natonal Park is a designated World Heritage Site. WHS are landmarks or areas which are recognized by the United Nations Educational, Scientific and Cultural Organization (UNESCO) as having cultural, historical, scientific or other form of significance, and is legally protected by international treaties.
                </p>
              </div>
            )}
          </Link>
        </div>
      )
    })
  }

  render() {
    const {
      items,
      filters,
      activeFilters,
      sorters,
      activeSorter,
    } = this.props

    return (
      <section className="items">
        <div className="no-item">
          Whoops! Looks like there aren't any parks that match your filters.
        </div>
        {this.renderItem(items, filters, activeFilters, sorters, activeSorter)}
      </section>
    )
  }
}

Items.propTypes = {
  items: object,
  filters: object,
  activeFilters: array,
  sorters: object,
  activeSorter: object,
}

export default Items
