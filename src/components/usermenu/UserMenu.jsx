import React from 'react'
import './UserMenu.css'
import { Link } from 'react-router-dom'
const UserMenu = () => {
  return (
    <div className="user_menu">
        <ul>
            <li>
                <Link to="."> 
                Profile
                </Link>
            </li>
            <li>
                <Link to='user-orders'> 
                Orders
                </Link>
            </li>

        </ul>
    </div>
  )
}

export default UserMenu