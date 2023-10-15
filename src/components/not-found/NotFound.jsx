import React from 'react'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not_found">
        <h1>404</h1>
        <h2>Sorry,the page you're looking  for not found <br />
             or the link is broken</h2>
<button 
onClick={()=>{
    window.location.href='/'
}}

>

    Go to Home
</button>
    </div>
  )
}

export default NotFound