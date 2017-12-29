import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { bool } from 'prop-types'

import Loader from './Loader'
import Header from './Header'
import Navigation from './Navigation'
import Items from '../containers/Items'
import Item from '../containers/Item'
import Map from '../containers/Map'

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

      {!isLoading && (
        <Switch>
          <Route path='/map' exact component={Map} />
        </Switch>
      )}

    </div>
  )
}

App.propTypes = {
  isLoading: bool,
}

export default App
