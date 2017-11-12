import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import ParkList from '../containers/ParkList'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header>National Perks</Header>
          <Route path="/" exact render={() => (
            <div className="content content-park-list">
              <ParkList />
            </div>
          )}/>
          <Route path="/park/:parkId" exact render={() => (
            <div className="content content-park">
            </div>
          )}/>
        </div>
      </Router>
    )
  }
}

export default App
