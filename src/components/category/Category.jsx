import React from 'react'
import './Category.css'

export const Category = (
    {
        image,
        title,
        description
    }
) => {
  return (
   <div className="category">
    <img src={image} alt="" />
    <h1>{title}</h1>
    <p>{description}</p>
   </div>
  )
}
