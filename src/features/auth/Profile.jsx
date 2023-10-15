import React from 'react'
import './Profile.css'
import { useSelector } from 'react-redux'
import { selectAuthUserInfo } from '../auth/authSlice'

const Profile = () => {
    const user = useSelector(selectAuthUserInfo)
   
  return (
    <div className="profile">
        <h2>Profile</h2>
        <div className="profile_container">
           {/*  <div className="profile_container1">
                <img src={`http://localhost:3000/images/${user.image}`} alt="profile" />
            </div> */}
            <div className="profile_container2">
                <h4>Name: {user.name}</h4>
                <h4>Email: {user.email}</h4>
                <h4>Role: {user.role}</h4>
            </div>
            </div>

    </div>
  )
}

export default Profile