import React from 'react'
import { bool } from 'prop-types'

import Loader from './Loader'
import Header from './Header'
import Navigation from './Navigation'
import Items from '../containers/Items'

function App (props) {
  const { isLoading } = props

  return (
    <div className="app">
      <Header>National Perks</Header>
      
      {isLoading ? <Loader /> : <div><Navigation /><Items /></div>}
    </div>
  )
}

App.propTypes = {
  isLoading: bool,
}

export default App
