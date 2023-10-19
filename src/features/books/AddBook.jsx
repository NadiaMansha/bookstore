import React from 'react'
import './AddBook.css'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { selectCategories,fetchCategories } from '../categories/categoriesSlice'
import { selectError,selectStatus,addNewBook } from './bookslice'
const AddBook = () => {
  const categories = useSelector(selectCategories)
  const [image, setImage] = useState(null)
  const dispatch = useDispatch()
  const status = useSelector(selectStatus)
  const error = useSelector(selectError)
  
  const [book, setBook] = useState({
    
    title: '',
    description: '',
    price: '',
    author:'',
    categoryId: categories[0]?._id
    
  })
  const handleAddBook = () => {
    const formData = new FormData()
    formData.append('image', image)
    formData.append('title', book.title)
    formData.append('description', book.description)
    formData.append('price', book.price)
    formData.append('author', book.author)
    formData.append('category', book.categoryId)
    dispatch(addNewBook(formData))
   
      alert('Book Added Successfully')
      setBook({
        image: '',
        title: '',
        description: '',
        author: '',
        price: '',
        categoryId: categories[0]._id
        
      })
      setImage(null)
    }
      useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchCategories())
        }
    }
    , [status, dispatch])

  return (
   <div className="add_book">
     <h1>Add a Book</h1>
    
 {
    image? <img 
     className='add_book_image'
     src={URL.createObjectURL(image)} alt="book" />:
  <input  
      onChange={(e) => setImage(e.target.files[0])}
     type="file" name="image" />
     }
        <input type="text" placeholder="Book Name"  
        value={book.title}
        onChange={(e) => setBook({...book, title: e.target.value})}
        />
        <input type="text" placeholder="Book Description" 
        value={book.description}
        onChange={(e) => setBook({...book, description: e.target.value})}
         />
        <input type="text" placeholder="Book Price" 
        value={book.price}
        onChange={(e) => setBook({...book, price: e.target.value})}
         />
        <input type="text" placeholder="Book Author"  
        value={book.author}
        onChange={(e) => setBook({...book, author: e.target.value})}
        />
       <select
  name="category"
  id="category"
  onChange={(e) => setBook({ ...book, categoryId: e.target.value })}
>
  {categories.map((category) => (
    <option key={category._id} value={category._id}>
      {category.name}
    </option>
  ))}
</select>

        
        <button 
        onClick={handleAddBook}
        
        >Add Book</button>
   </div>
  )

}


export default AddBook