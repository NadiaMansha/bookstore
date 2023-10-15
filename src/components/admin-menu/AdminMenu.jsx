import React from 'react'
import './AdminMenu.css'
import { Link } from 'react-router-dom'

const AdminMenu = () => {
  return (
   <div className="admin_menu">
    <ul>
      <li>
        <Link to=".">
        Profile
        </Link>
      </li>
<li>
<Link to="books">
Books
</Link>
</li>
<li>
<Link to="add-book">
Add Book
</Link>
</li>
<li>
<Link to="categories">
Categories
</Link>
</li>

<li>
<Link to="admin-orders">
Orders
</Link>
</li>

    </ul>
   </div>
  )
}

export default AdminMenu