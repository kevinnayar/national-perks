import React, { Component } from 'react'
import { object } from 'prop-types'

class Item extends Component {
  closeItemModal(history) {
    if (history.length <= 2) {
      window.location.href = `${window.location.href.split('#/')[0]}#/`
    }
    else {
      history.goBack()
    }
  }

  render() {
    const {
      activeItem,
      filters,
      history
    } = this.props
    const image = activeItem.image ?
      {
        url: activeItem.image.url,
        attribution: activeItem.image.attribution,
        attribution_url: activeItem.image.attribution_url
      } : {
        url: '',
        attribution: '',
        attribution_url: ''
      }
    const mapLink = activeItem.id ? activeItem.id.replace('park_', '') : ''
    const states = activeItem.states ? activeItem.states : []

    return (
      <div className="item modal">
        <div className="image" style={{backgroundImage: `url('images/originals/${image.url}')`}}>
          <h1 className="title">{activeItem.title}</h1>
          <div className="item-close-trigger" onClick={() => this.closeItemModal(history)}>
            <span className="top-line" />
            <span className="bottom-line" />
          </div>
          <a className="attribution" href={image.attribution_url} target="_blank" rel="noopener noreferrer">
            Image credit: {image.attribution}
          </a>
        </div>
        <div className="content">
          <div className="sidebar">
            <div className="stat">
              <i className="material-icons key">watch_later</i>
              <p className="value">Established on {activeItem.date_established_readable}</p>
            </div>
            <div className="stat">
              <i className="material-icons key">group</i>
              <p className="value">{activeItem.visitors} Annual Visitors</p>
            </div>
            <div className="stat link">
              <a href={activeItem.nps_link} target="_blank" rel="noopener noreferrer">
                <i className="material-icons key">arrow_forward</i>
                <p className="value">Visit NPS Page</p>
              </a>
            </div>
            <div className="stat link">
              <a href={`http://npmaps.com/${mapLink}`} target="_blank" rel="noopener noreferrer">
                <i className="material-icons key">map</i>
                <p className="value">Download Park Maps</p>
              </a>
            </div>
          </div>
          <div className="main">
            <p className="description">{activeItem.description}</p>
            <ul className="state-list">
              {states.map(state => {
                return (
                  <li
                    className="state"
                    key={`${activeItem.id}:${state}`}>
                      {filters[state].title}
                    </li>
                  )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

Item.propTypes = {
  activeItem: object,
  filters: object,
  history: object,
}

export default Item
