import React, { Component } from 'react'
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
    const { items, history } = this.props
    const itemLink = this.state.selectedPlace.name ? `/#/park/${this.state.selectedPlace.name.replace(/ /g, '-').toLowerCase()}` : ''

    return (
      <section className="map">
        <div className="map-close-trigger" onClick={() => history.goBack()}>
          <span className="top-line" />
          <span className="bottom-line" />
        </div>
        <div className="google-map">
          <GoogleMap
            google={this.props.google}
            initialCenter={{ lat: 49, lng: -98.60 }}
            zoom={4}
            onClick={this.onMapClick}>
            {this.renderMapMarker(items, this.onMarkerClick)}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.infoWindowVisibile}>
              <a className="item-link" href={itemLink}>
                {this.state.selectedPlace.name}<br />
                National Park
              </a>
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
