import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { slugify } from '../helpers'
import { fetchParks } from '../store/parks/actions'
import { fetchSorters } from '../store/sorters/actions'
import Loader from '../components/Loader'

class ParkList extends Component {
  componentDidMount() {
    this.props.fetchParks()
    this.props.fetchSorters()
  }

  renderParks(parks) {
    return parks.map(park => {
      const parkId = slugify(park.title)

      return (
        <div className="park" key={park.title}>
          <Link to={`/park/${parkId}`}>
            <img className="image" src={`/images/thumbnails/${park.image}`} alt={park.title} />
            <h1 className="title">{park.title}</h1>

            {park.world_heritage_site && (
              <div className="world-heritage-site">
                <img className="icon" src="/images/world-heritage-site.svg" alt="World Heritage Site" />
                <div className="tooltip-arrow"></div>
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
    const isLoading = (!this.props.activeParks) ? true : false

    return (
      <div className="park-list">
        {isLoading ? <Loader /> : this.renderParks(this.props.activeParks)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    parks: state.parks.defaults,
    activeParks: state.parks.active,
    sorters: state.sorters.defaults,
    activeSorter: state.sorters.active,
  }
}

export default connect(mapStateToProps, { fetchParks, fetchSorters })(ParkList)
