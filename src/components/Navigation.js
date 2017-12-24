import React, { Component } from 'react'
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
      <div className="navigation">
        <div  className={`navigation-trigger ${activeState}`} onClick={() => this.toggleNavigation()}>
          <span className="top-line"></span>
          <span className="middle-line"></span>
          <span className="bottom-line"></span>
        </div>
        <div className={`navigation-elements ${activeState}`}>
          <Filters filters={this.props.filters} />
        </div>
      </div>
    )
  }
}

export default Navigation
