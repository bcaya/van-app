import React from "react"
import {Outlet} from "react-router-dom"
import Header from "./Header"
import Footer from './Footer'
import { Box, Cover } from '../assets/CSS/StylesMain.jsx'

export default function Layout(){
  return(

      <box-l padding="0">
      <Header />
      <main>
        <Outlet/>
      <Footer/>
      </main>
      </box-l>


  )
}