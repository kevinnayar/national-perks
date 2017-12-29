import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { object } from 'prop-types'
import { Map as GoogleMap, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'

class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      infoWindowVisibile: false,
      activeMarker: {},
      selectedPlace: {},
    }

    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onMapClick = this.onMapClick.bind(this)
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      infoWindowVisibile: true
    })
  }

  onMapClick(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        infoWindowVisibile: false,
        activeMarker: null
      })
    }
  }

  renderMapMarker(items, onMarkerClick) {
    return Object.keys(items).map(park => {
      return (
        <Marker
          key={items[park].id}
          name={items[park].title}
          position={{
            lat: items[park].coordinates.latitude,
            lng: items[park].coordinates.longitude
          }}
          onClick={onMarkerClick} />
      )
    })
  }

  render () {
    const itemLink = this.state.selectedPlace.name ? `/#/park/${this.state.selectedPlace.name.replace(/ /g, '-').toLowerCase()}` : ''

    return (
      <section className="map">
        <Link className="map-close-trigger" to="/">
          <span className="top-line" />
          <span className="bottom-line" />
        </Link>
        <div className="google-map">
          <GoogleMap
            google={this.props.google}
            initialCenter={{ lat: 49, lng: -98.60 }}
            zoom={4}
            onClick={this.onMapClick}>
            {this.renderMapMarker(this.props.items, this.onMarkerClick)}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.infoWindowVisibile}>
              <div>
                <a href={itemLink}>
                  <p>{this.state.selectedPlace.name}</p>
                </a>
              </div>
            </InfoWindow>
          </GoogleMap>
        </div>
      </section>
    )
  }
}

Map.propTypes = {
  items: object,
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
})(Map)
