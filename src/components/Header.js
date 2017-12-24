import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = ({children}) => {
  return (
    <header className="header">
      <h1 className="title"><Link to="/">{children}</Link></h1>
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.string.isRequired
}

export default Header
