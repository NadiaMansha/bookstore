import React from 'react'
import './UserMenu.css'
import { NavLink } from 'react-router-dom'
const UserMenu = () => {
  return (
    <div className="user_menu">
        <ul>
            <li>
                <NavLink 
                end
                className={({ isActive }) =>
               isActive ? "active-link" : ""
              }
                to="."> 
                Profile
                </NavLink>
            </li>
            <li>
                <NavLink 
                className={({ isActive}) =>
                 isActive ? "active-link" : ""}
                to='user-orders'> 
                Orders
                </NavLink>
            </li>

        </ul>
    </div>
  )
}

export default UserMenu