import React from 'react'
import './Navbar.css'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {BiLogoLinkedin} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'
import{FiPhoneCall} from 'react-icons/fi'
import {FiSearch} from 'react-icons/fi'
import account from '../../assets/account.png'
import cartImg from '../../assets/cart.png'
import wishlist from '../../assets/wishlist.png'
import logo from '../../assets/logo.png'
import { useSelector } from 'react-redux'
import { cartSelector } from '../../features/cart/cartSlice'
import { Link } from 'react-router-dom'
import { selectAuthUserToken } from '../../features/auth/authSlice'
import {AiOutlineLogout} from 'react-icons/ai'

export const Navbar = () => {
  const cart = useSelector(cartSelector)
  const token = useSelector(selectAuthUserToken)
  
  const getTotalQuantity = () => {
    let total = 0
    cart?.forEach(item => {
      total += item.quantity
    })
    return total
  }

  return (
   <div className="navbar">

      <div className="top-nav">
        <p>
          <FiPhoneCall className='icon'/>
          &nbsp;
          +1 (234) 567-8910
        </p>
        <div className="social-icons">
          <BiLogoFacebookCircle  className='icon'/>
          <BiLogoInstagramAlt  className='icon'/>
          <BiLogoLinkedin  className='icon'/>
        
          <BiLogoTwitter className='icon' />
        </div>
      </div>
      <div className="mid-nav">
        <div className="logo">
          <img src={logo} alt="logo" />
          </div>
        <div className="search">
          <input type="text" placeholder="Search" />
           <FiSearch  className='search-icon'/>
          </div>
          <div className="mid_nav-list">
            <ul>
              <li>
                {
                  token ? 
                  <Link to='/logout'>
                    <AiOutlineLogout/>
                    &nbsp;
                    LOGOUT
                  </Link> : <Link to='/login'>
                  <img src={account} alt="account" />
                &nbsp;
                    LOGIN</Link>
                }
              </li>
              <div className='vertical'></div>
              {
                token?              <li> 
                  <Link to="dashboard">
                  <img src={account} alt="account" />
                &nbsp;
                ACCOUNT</Link>
               
                </li>:""
                
              }
              <div className='vertical'></div>
              <li>
              <span className='cart-count'>{getTotalQuantity() || 0} </span>
               
               <Link to="/cart">
               <img   
                
                src={cartImg} alt="cart" />
                &nbsp;
                CART</Link>
               
               
                </li>
                <div className='vertical'></div>
              <li>
                <img src={wishlist} alt="wishlist" />
                &nbsp;
                WISHLIST</li>
            </ul>
          </div>
          
        </div>
        <div className='line'></div>

      <div className="bottom-nav">
       
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <div className='vertical'></div>
          <li>
            <a href="about">About Us</a>
          </li>
          <div className='vertical'></div>
          <li>
          <Link  to="books">Books</Link>
          </li>
          <div className='vertical'></div>
          <li>
            <a href="#new-release">New Release</a>
          </li>
          <div className='vertical'></div>
         
          <div className='vertical'></div>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
  
   </div>
  )
}
