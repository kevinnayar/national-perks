import React from 'react'
import { string } from 'prop-types'
import { Link } from 'react-router-dom'

const Header = ({children}) => {
  return (
    <header className="header">
      <h1 className="title"><Link to="/">{children}</Link></h1>
    </header>
  )
}

Header.propTypes = {
  children: string.isRequired,
}

export default Header
