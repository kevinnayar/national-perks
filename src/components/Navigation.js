import React, { Component } from 'react'
import { object } from 'prop-types'

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
      <div className="navigation">
        <div  className={`navigation-trigger ${activeState}`} onClick={() => this.toggleNavigation()}>
          <span className="top-line"></span>
          <span className="middle-line"></span>
          <span className="bottom-line"></span>
        </div>
        <div className={`navigation-elements ${activeState}`}>
          <Sorters sorters={this.props.sorters} />
          <Filters filters={this.props.filters} />
        </div>
      </div>
    )
  }
}

Navigation.propTypes = {
  filters: object,
  sorters: object,
}

export default Navigation
