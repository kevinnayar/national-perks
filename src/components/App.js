import React from 'react'
import { bool, object } from 'prop-types'

import Loader from './Loader'
import Header from './Header'
import Navigation from './Navigation'

function App (props) {
  const {
    isLoading,
    data,
    sorters,
  } = props

  return (
    <div className="app">
      <Header>National Perks</Header>
      {isLoading && <Loader />}
      {!isLoading && <Navigation filters={data.states} sorters={sorters} />}
    </div>
  )
}

App.propTypes = {
  isLoading: bool,
  data: object,
  sorters: object,
}

export default App


/*
Rendering Patterns:
  {!isLoading && <Navigation filters={filters} sorters={sorters} />}
  {isLoading ? <Loader /> : <Header>National Perks</Header>}
*/
