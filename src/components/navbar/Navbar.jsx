import React from 'react'
import './Navbar.css'
import {FiPhoneCall} from 'react-icons/fi'
import {BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoLinkedin, BiLogoTwitter} from 'react-icons/bi'
import account from '../../assets/account.png'
import cartImg from '../../assets/cart.png'
import logo from '../../assets/logo.png'
import { useSelector } from 'react-redux'
import { cartSelector } from '../../features/cart/cartSlice'
import { Link } from 'react-router-dom'
import { selectAuthUserToken } from '../../features/auth/authSlice'
import {AiOutlineLogout} from 'react-icons/ai'
import { Button, Modal } from 'antd';
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const cart = useSelector(cartSelector)
  const token = useSelector(selectAuthUserToken)
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = React.useState('')
  const navigate = useNavigate()
  const [showLinks, setShowLinks] = React.useState(false);
  const getTotalQuantity = () => {
    let total = 0
    cart?.forEach(item => {
      total += item.quantity
    })
    return total
  }
  return (
    <div className="navbar">
      <div className="top_nav">
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
      <div className="mid_nav">
      <div className="logo">
          <img src={logo} alt="logo" />
          </div>
        <div className="search">
          <input  
          name='search'
          value={search}
          onChange={e => setSearch(e.target.value)}
          type="text" placeholder="Search" />
           <FiSearch  
            onClick={() =>{
              setSearchParams({ search })
              navigate(`/search?search=${search}`)
          }}
            className='search-icon'/>
            </div>

            <div className="mid_nav-list">
            <ul>
            {
              token?
          <li  className='logout'> 
                <AiOutlineLogout
                onClick={() => {
                  setIsModalVisible(true); }
                }
               
               />
                &nbsp;
                LOGOUT
                </li>:
                <li>
                <Link to="/login">
                <AiOutlineLogout className='icon'/>
                &nbsp;
                LOGIN</Link>
                </li>
            }
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
               <img  src={cartImg} alt="cart" />
                &nbsp;
                CART</Link>
                </li>
            </ul>
          

          </div>
            
          <div className="mobile_nav">
        {
            showLinks==false?
            <div 
            style={{display:'flex', alignItems:'center'}}>
            
                <span className='cart-count'>{getTotalQuantity() || 0} </span>
                    <Link to="/cart">
               <img  src={cartImg} alt="cart" />
                </Link>
              <GiHamburgerMenu 
            className='menu-icon'
             onClick={()=>setShowLinks(true)} />
            </div>
            
            :
            
            <div className="navbar__links">
                
                  <AiFillCloseCircle 
                  className="navbar__hamburger__icon_close"
                  onClick={()=>setShowLinks(false)} />
                 <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
       
          <li>
            <Link to="about">About Us</Link>
          </li>
           
          <li>
            <a href="#new-release">New Release</a>
          </li>
          <li>
          <Link  to="books">Books</Link>
          </li>
          <li>
          <Link to="contact">Contact</Link>
          </li>
         
         
        </ul>
            </div>
        }
   </div>
     
      </div>
      <div className="bottom_nav">
      <ul >
          <li>
            <Link to="/">Home</Link>
          </li>
          <div className='vertical'></div>
          <li>
            <Link to="about">About Us</Link>
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
          <li>
          <Link to="contact">Contact</Link>
          </li>
        </ul>
      </div>


      <Modal 
    title="Logout"
     open={isModalVisible}
    onOk={() => {
      setIsModalVisible(false)
      localStorage.removeItem('userToken')
      localStorage.removeItem('userInfo')
      window.location('/')
    }}
    onCancel={() => {
      setIsModalVisible(false)
    }}
 
  >
    <p>Are you sure you want to logout?</p>
  </Modal>

    </div>
  )
}

export default Navbar