import React from 'react'
import './Layout.css'

import {Navbar} from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Navbar />
    <div className="content">  <Outlet /></div>
  
    </>

  )
}

export default Layout
