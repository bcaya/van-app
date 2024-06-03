import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { Cluster } from '../assets/CSS/StylesMain'
import { CiLogout } from "react-icons/ci";

export default function Header(){
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline"
}

function fakeLogOut(){
  localStorage.removeItem("loggedin")
}
  return(
    <header>

    
      <box-l>

      <cluster-l justify="space-between" >
        <div>
        <Link className="site-logo" to="/">VanVentures</Link>
        </div>
           <div>
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
          <Link to="login" className="login-link">
           <icon-l>
           <CiLogout />
            </icon-l> 
          </Link>
          <button className="logout-button" onClick={fakeLogOut}>X</button>
         
          
          </div> 
            </cluster-l>
          </box-l>
    </header>
  )
}