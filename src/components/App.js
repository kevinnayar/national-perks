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
      {isLoading ?
        <Loader /> :
        <div className="container">
          <Header>National Perks</Header>
          <Navigation />
          <Items />
        </div>
      }
    </div>
  )
}

App.propTypes = {
  isLoading: bool,
}

export default App
