import React from 'react'
import './Login.css'
import { Link ,useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { selectAuthError,selectAuthLoading,selectAuthSuccess,loginUser } from './authSlice'

const Login = () => {
  const  [formData, setFormData] = React.useState({ email: '', password: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loading = useSelector(selectAuthLoading)
  const success = useSelector(selectAuthSuccess)
  const error = useSelector(selectAuthError)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser(formData))
   
      setFormData({ email: '', password: '' })
      alert('Login successful')
      navigate('/')

    
  }
  return (
    <div className="login">
<h1>Login</h1>

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
<button onClick={handleSubmit}>
{loading ? 'Loading...' : 'Login'}
</button>


<p>
    Don't have an account? <Link to='/signup'><b>Signup</b></Link>
</p>
    </div>
  )
}

export default Login