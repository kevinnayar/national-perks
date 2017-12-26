import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { bool } from 'prop-types'

import Loader from './Loader'
import Header from './Header'
import Navigation from './Navigation'
import Items from '../containers/Items'
import Item from '../containers/Item'

function App (props) {
  const { isLoading } = props

  return (
    <div className="app">
      <Header>National Perks</Header>

      {isLoading
        ? <Loader />
        : <Navigation />
      }

      {!isLoading && (
        <Switch>
          <Route path='/' exact component={Items} />
        </Switch>
      )}

      {!isLoading && (
        <Switch>
          <Route path='/park/:activeItemId' exact render={({ match }) => (
            <Item activeItemId={`park_${match.params.activeItemId}`} />
          )} />
        </Switch>
      )}

    </div>
  )
}

App.propTypes = {
  isLoading: bool,
}

export default App
/*


      {!isLoading && (
        <Switch>
          <Route path='/outbound' component={OutboundScreen} />
          <Route path='/inbound' component={InboundScreen} />
          <Route path='/inbound-trends/:id?' component={InboundTrendsScreen} />
          <Route path='/activity' component={ActivityScreen} />
          <Redirect from='/' to='/inbound-trends' />
        </Switch>
      )}


import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import ParkList from '../containers/ParkList'
import Park from '../containers/Park'

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
          <Route path="/park/:parkId" exact render={({ match }) => (
            <div className="page page-park">
              <Park parkId={match.params.parkId} />
            </div>
          )}/>
        </div>
      </Router>
    )
  }
}

export default App
*/
