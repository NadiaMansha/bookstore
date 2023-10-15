import React, { useEffect } from "react";
import "./AdminCategories.css";
import { useSelector ,useDispatch} from "react-redux";
import { selectCategories,selectCategoryError,selectCategoryStatus, fetchCategories,addCategoryAsync } from "./categoriesSlice";

const AdminCategories = () => {
    const dispatch = useDispatch()
    const categories = useSelector(selectCategories)
    const status = useSelector(selectCategoryStatus)
    const error = useSelector(selectCategoryError)
    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchCategories())
        }
    }
    , [status, dispatch])
    const [formData, setFormData] = React.useState({
        name: '',
        description: ''
    })

    const handleSubmit = () => {
         console.log(formData)
        dispatch(addCategoryAsync(formData))
        setFormData({
            name: '',
            description: ''
        })
    }

  return (
    <div className="admin_categories">
      <div className="add_category">
        <h1>Add a Category</h1>

        <input type="text"  
        name="name"
        value={formData.name}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
        placeholder="Category Name" />
        <input type="text" placeholder="Category Description" 
        name="description"
        value={formData.description}
        onChange={e => setFormData({ ...formData, description: e.target.value })}
         />
        <button  
        onClick={handleSubmit}
       >Add Category</button>
      </div>

        <div className="categories_list">
            <h1>Categories List</h1>
           <table>
                <thead>
                     <tr>
                          <th>name</th>
                          <th>description</th>
                          <th>Actions</th>
                     </tr>
                </thead>
                <tbody>
                     {categories?.map((category) => (
                          <tr key={category._id}>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <td>
                                <button>Delete</button>
                                <button>Edit</button> 
                            </td>
                          </tr>
                     ))}
                </tbody>
           </table>
            </div>
    </div>
  );
};

export default AdminCategories;
