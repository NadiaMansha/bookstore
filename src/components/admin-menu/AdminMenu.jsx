import React from 'react'
import './AdminMenu.css'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
   <div className="admin_menu">
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
 className={({ isActive }) =>
 isActive ? "active-link" : ""
 }
 to="books">
Books
</NavLink>
</li>
<li>
<NavLink 
 className={({ isActive }) =>
 isActive ? "active-link" : ""
 }
 to="add-book">
Add Book
</NavLink>
</li>
<li>
<NavLink 
 className={({ isActive }) =>
 isActive ? "active-link" : ""
 }
 to="categories">
Categories
</NavLink>
</li>

<li>
<NavLink 
 className={({ isActive }) =>
 isActive ? "active-link" : ""
 }
 to="admin-orders">
Orders
</NavLink>
</li>

    </ul>
   </div>
  )
}

export default AdminMenu