import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {Cluster, Box} from '../assets/CSS/StylesMain'

export default function HostLayout(){
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
  return(
    <>
      <nav className="host-nav">
        <box-l>
        <cluster-l justify="flex-start">
        <NavLink
          to="."
          end
          style={({isActive}) => isActive?  activeStyles : null}
          >
            Dashboard
          </NavLink>
          <NavLink
          to="income"
          style={({isActive}) => isActive?  activeStyles : null}
          >
            Income
          </NavLink>
          <NavLink
          to="vans"
          style={({isActive}) => isActive?  activeStyles : null}
          >
            Vans
          </NavLink>
          <NavLink
          to="reviews"
          style={({isActive}) => isActive?  activeStyles : null}
          >
            Reviews
          </NavLink>
        </cluster-l>
        </box-l>
       
      </nav>
       
      <Outlet/>
    </>
  )
}