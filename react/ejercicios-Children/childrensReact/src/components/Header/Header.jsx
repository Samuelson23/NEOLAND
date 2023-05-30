import "./Header.css"
import React from 'react'

const Header = (props) => {
    const {children} = props
  return (
    <header>{children}</header>
  )
}

export default Header