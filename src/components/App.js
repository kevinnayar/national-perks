import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { object, bool } from 'prop-types'

import Loader from './Loader'
import Header from './Header'
import Navigation from './Navigation'
import Items from '../containers/Items'
import Item from '../containers/Item'
import Map from '../containers/Map'

function App (props) {
  const { isLoading, history } = props

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
            <Item activeItemId={`park_${match.params.activeItemId}`} history={history} />
          )} />
        </Switch>
      )}

      {!isLoading && (
        <Switch>
          <Route path='/map' exact>
            <Map history={history} />
          </Route>
        </Switch>
      )}

    </div>
  )
}

App.propTypes = {
  isLoading: bool,
  history: object,
}

export default App
