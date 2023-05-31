import { NavLink } from "react-router-dom"
import TitleHeader from "../TitleHeader/TitleHeader"
import "./Header.css"
import React from 'react'

const Header = () => {
  return (
    <header>
        <TitleHeader/>
        <nav className="navHeader">
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
          <NavLink to="/Listado">Listado</NavLink>
          </li>
          <li>
          <NavLink to="/About">About</NavLink>
          </li>
        </nav>
    </header>
  )
}

export default Header