import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStates, updateActiveStates } from '../store/states/actions'
import { fetchParks, updateActiveParks } from '../store/parks/actions'
import Loader from '../components/Loader'

class Filters extends Component {
  componentDidMount() {
    this.props.fetchStates()
    if (this.props.activeParks === undefined) this.props.fetchParks()
  }

  handleFilterClick(state, activeStates, parks, activeParks) {
    new Promise((resolve, reject) => {
      resolve(this.props.updateActiveStates(state, activeStates))
    })
    .then(newActiveStates => {
      this.props.updateActiveParks(state, newActiveStates, parks, activeParks)
    })
  }

  renderFilters(states, activeStates, parks, activeParks) {
    return states.map(state => {
      const activeClassName = (activeStates.includes(state)) ? 'active' : 'inactive'

      return (
        <p
          className={`filter option ${activeClassName}`}
          key={state}
          onClick={() => this.handleFilterClick(state, activeStates, parks, activeParks)}>
          {state}
        </p>
      )
    })
  }

  render() {
    const isLoading = (!this.props.activeStates) ? true : false

    return (
      <div className="navigation-element filters-element">
        <p className="title">Filter by States</p>
        <div className="filters">
          {isLoading ? <Loader /> : this.renderFilters(this.props.states, this.props.activeStates, this.props.parks, this.props.activeParks)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    states: state.states.defaults,
    activeStates: state.states.active,
    parks: state.parks.defaults,
    activeParks: state.parks.active,
  }
}

export default connect(mapStateToProps, { fetchStates, updateActiveStates, fetchParks, updateActiveParks })(Filters)
