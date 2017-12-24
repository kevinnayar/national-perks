import React from 'react'
import { bool, object } from 'prop-types'

//import Loader from './Loader'
import Header from './Header'
import Navigation from '../containers/Navigation'

function App (props) {
  const {
    isLoading,
    data,
  } = props

  return (
    <div className="app">
      <Header>National Perks</Header>
      {!isLoading && <Navigation data={data} />}
    </div>
  )
}

App.propTypes = {
  isLoading: bool,
  data: object,
}

export default App


/*
{!isLoading && <Navigation filters={filters} sorters={sorters} />}

i like these patterns:

{isLoading ? <Loader /> : <Header>National Perks</Header>}
{!isLoading && <Navigation search={search} />}

*/
