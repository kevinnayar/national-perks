import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import ParkList from '../containers/ParkList'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header>National Perks</Header>
          <Navigation />
          <Route path="/" exact render={() => (
            <div className="page page-park-list">
              <ParkList />
            </div>
          )}/>
          <Route path="/park/:parkId" exact render={() => (
            <div className="page page-park">
            </div>
          )}/>
        </div>
      </Router>
    )
  }
}

export default App
