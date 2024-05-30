import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { Cluster } from '../assets/CSS/StylesMain'

export default function Header(){
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "var(--dark-purple)"
}
  return(
    <header>
      <Link className="site-logo" to="/">VanVentures</Link>
      <nav>
        <cluster-l justify="center">
          <NavLink
          to="/host"
          style={({isActive}) => isActive ? activeStyles : null}
          >Host
        </NavLink>
        <NavLink
          to="/vans"
          style={({isActive}) => isActive ? activeStyles : null}
          >
          Vans
        </NavLink>
        <NavLink
          to="/contact-us"
          style={({isActive}) => isActive ? activeStyles : null}
          >
            Contact Us
          </NavLink>
          </cluster-l>
      </nav>
    </header>
  )
}