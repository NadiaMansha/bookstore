import React from 'react'
import './Dashboard.css'
import { useSelector } from 'react-redux'
import { selectAuthUserInfo } from '../auth/authSlice'
import AdminMenu from '../../components/admin-menu/AdminMenu'
import UserMenu from '../../components/usermenu/UserMenu'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    const user = useSelector(selectAuthUserInfo)

  return (
    <div className="dashboard">
      {
        user.role==='admin' ?
        <AdminMenu /> :
        <UserMenu />
      }
     
           <Outlet />
      
   
    </div>
  )
}

export default Dashboard