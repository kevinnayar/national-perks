import React from 'react'
import { bool, object } from 'prop-types'

import Loader from './Loader'
import Header from './Header'
import Navigation from './Navigation'
import Items from '../containers/Items'

function App (props) {
  const {
    isLoading,
    items,
    filters,
    sorters,
  } = props

  return (
    <div className="app">
      <Header>National Perks</Header>
      {!isLoading && <Navigation filters={filters} sorters={sorters} />}
      {isLoading ? <Loader /> : <Items items={items} filters={filters} />}
    </div>
  )
}

App.propTypes = {
  isLoading: bool,
  items: object,
  filters: object,
  sorters: object,
}

export default App
