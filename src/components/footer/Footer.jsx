import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer_left">
        <img src={logo} alt='logo' />
     <p>Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
     <p>© 2022 Arihant. All Rights Reserved.</p>
        </div>
        <div className="footer_right">
            <h3>Company</h3>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Books</li>
               
               
            </ul>
        </div>
    
    </div>
                                                                                                         
  )
}

export default Footer