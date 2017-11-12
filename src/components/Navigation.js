import React, { Component } from 'react'
import Filters from '../containers/Filters'

class Navigation extends Component {
  constructor () {
    super()

    this.state = {
      navigationActive: false
    }

    this.handleNavigationTrigger = this.handleNavigationTrigger.bind(this)
  }

  handleNavigationTrigger() {
    this.setState(prevState => ({
      navigationActive: !prevState.navigationActive
    }))
  }

  render() {
    const activeState = (this.state.navigationActive) ? 'active' : 'inactive'

    return (
      <div className="navigation">
        <div className={`navigation-trigger ${activeState}`} onClick={() => this.handleNavigationTrigger()}>
          <span className="top-line"></span>
          <span className="middle-line"></span>
          <span className="bottom-line"></span>
        </div>
        <div className={`navigation-elements ${activeState}`}>
          <Filters />
        </div>
      </div>
    )
  }
}

export default Navigation
