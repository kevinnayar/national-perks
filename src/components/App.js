import React from 'react'
import { bool, object } from 'prop-types'

import Loader from './Loader'
import Header from './Header'
import Navigation from './Navigation'
import Items from '../containers/Items'

function App (props) {
  const {
    isLoading,
    data,
    sorters,
  } = props

  return (
    <div className="app">
      <Header>National Perks</Header>
      {!isLoading && <Navigation filters={data.states} sorters={sorters} />}
      {isLoading ? <Loader /> : <Items items={data.parks} filters={data.states} />}
    </div>
  )
}

App.propTypes = {
  isLoading: bool,
  data: object,
  sorters: object,
}

export default App
