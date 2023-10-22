import React from 'react'
import './Layout.css'

import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

const Layout = () => {
  return (
    <>
    <Navbar />
    <div className="content">  <Outlet /></div>
    <Footer />
  
    </>

  )
}

export default Layout
