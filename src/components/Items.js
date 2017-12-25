import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { object } from 'prop-types'

class Items extends Component {
  renderItem(items, filters) {
    console.log(filters)
    return Object.keys(items).map(park => {
      console.log(items[park])
      return (
        <div
          className={`item`}
          key={items[park].id}>
          <Link to={`/park/${items[park].title.replace(/ /g, '-').toLowerCase()}`}>
            <img
              className="image"
              src={`/images/thumbnails/${items[park].image}`}
              alt={items[park].title} />
            <h1 className="title">{items[park].title}</h1>

            <ul className="state-list">
              {items[park].states.map(state => {
                return (
                  <li
                    className="state"
                    key={`${items[park].id}:${state}`}>
                      {filters[state].title}
                    </li>
                  )
              })}
            </ul>

            {items[park].world_heritage_site && (
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
    return (
      <section className="items">
        {this.renderItem(this.props.items, this.props.filters)}
      </section>
    )
  }
}

Items.propTypes = {
  items: object,
  filters: object,
}

export default Items
