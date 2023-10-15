import React from 'react'
import './Signup.css'
import { Link ,useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { selectAuthError,selectAuthLoading,selectAuthSuccess,registerUser } from './authSlice'

export const Signup = () => {
  const  [formData, setFormData] = React.useState({
    username: '',
     email: '', password: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loading = useSelector(selectAuthLoading)
  const success = useSelector(selectAuthSuccess)
  const error = useSelector(selectAuthError)
  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(registerUser(formData))
    if (success) {
      setFormData({  username:'',email: '', password: '' })
      alert('Signup successful')
      navigate('/')

    }
    if (error) {
      alert( error.toString())

    }
  }
  return (
    <div className="login">
<h1>Signup</h1>
<label htmlFor="username">Username</label>
<input type="text" 
value={formData.username}
onChange={e => setFormData({ ...formData, username: e.target.value })}
 name='username' />
<label htmlFor="email">Email</label>
<input type="text"
  value={formData.email}
onChange={e => setFormData({ ...formData, email: e.target.value })} 
 name='email' />
<label htmlFor="password">Password</label>
<input type="text"  
value={formData.password}
onChange={e => setFormData({ ...formData, password: e.target.value })}
name='password' />
<button 
disabled={loading}
onClick={handleSubmit}
>{
  loading ? 'Loading...' : 'Signup'
}
</button>
<p>
    Already have an account? <Link to='/login'><b>Login</b></Link>
</p>
    </div>
  )
}
