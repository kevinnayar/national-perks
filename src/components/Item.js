import React, { Component } from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'

class Item extends Component {
  render() {
    const { activeItem } = this.props
    return (
      <div className="item modal">
        <div className="image" style={{backgroundImage: `url('/images/originals/${activeItem.image}')`}}>
        </div>
        <h1 className="title">{activeItem.title}</h1>
        <Link to="/">
          <i className="material-icons">close</i>
        </Link>
        {activeItem.world_heritage_site && (
          <div className="world-heritage-site">
            <img className="icon" src="/images/world-heritage-site.svg" alt="World Heritage Site" />
            <div className="tooltip-arrow"></div>
            <p className="tooltip">
            This U.S. Natonal Park is a designated World Heritage Site. WHS are landmarks or areas which are recognized by the United Nations Educational, Scientific and Cultural Organization (UNESCO) as having cultural, historical, scientific or other form of significance, and is legally protected by international treaties.
            </p>
          </div>
        )}
      </div>
    )
  }
}

Item.propTypes = {
  activeItem: object,
}

export default Item


/*
return (
  <div className="park-modal">

    <h1 className="title">{park.title}</h1>
    <ul className="state-list">
      {park.states.map(state => <li className="state" key={`${id}-${state}`}>{state}</li>)}
    </ul>

    {park.world_heritage_site && (
      <div className="world-heritage-site">
        <img className="icon" src="/images/world-heritage-site.svg" alt="World Heritage Site" />
        <div className="tooltip-arrow"></div>
        <p className="tooltip">
        This U.S. Natonal Park is a designated World Heritage Site. WHS are landmarks or areas which are recognized by the United Nations Educational, Scientific and Cultural Organization (UNESCO) as having cultural, historical, scientific or other form of significance, and is legally protected by international treaties.
        </p>
      </div>
    )}
  </div>
  */
