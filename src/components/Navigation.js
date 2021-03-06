import React, { Component } from 'react'

import Sorters from '../containers/Sorters'
import Filters from '../containers/Filters'

class Navigation extends Component {
  constructor () {
    super()

    this.state = {
      navigationVisible: false
    }

    this.toggleNavigation = this.toggleNavigation.bind(this)
  }

  toggleNavigation() {
    this.setState(prevState => ({
      navigationVisible: !prevState.navigationVisible
    }))
  }

  render() {
    const activeState = (this.state.navigationVisible) ? 'active' : 'inactive'

    return (
      <section className="navigation">
        <div className={`navigation-trigger ${activeState}`} onClick={() => this.toggleNavigation()}>
          <span className="top-line" />
          <span className="middle-line" />
          <span className="bottom-line" />
        </div>
        <div className={`navigation-elements ${activeState}`}>
          <Sorters />
          <Filters />
        </div>
      </section>
    )
  }
}

export default Navigation
