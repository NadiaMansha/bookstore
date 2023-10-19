import React from 'react'
import './AdminOrders.css'
import { useSelector,useDispatch } from 'react-redux'
import { selectAllOrders,fetchOrders } from '../ordersSlice'

const AdminOrders = () => {
  const dispatch = useDispatch()
  const orders = useSelector(selectAllOrders)
  React.useEffect(() => {

    if (orders.length === 0){
    dispatch(fetchOrders())
    }
  }, [dispatch])
console.log(orders)
  return (
    <div className="admin_orders">
      <h1>orders</h1>
      
      <table className='orders_table'>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>address</th>
            <th>total</th>
            <th>cartItems</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr key={order._id}>
              <td>{order?.name}</td>
              <td>{order?.email}</td>
              <td>{order?.address}</td>
              <td>{order?.payment?.amount/100}$</td>
              <td>{order?.books.length}</td>
              <td>{order?.status}</td>
            </tr>
          ))}
        </tbody>
        </table>
        <div className="orders_mobile">
        {orders?.map((order) => (
          <div className="order_mobile" key={order._id}>
            <h3>{order?.name}</h3>
            <p>{order?.email}</p>
            <p>{order?.address}</p>
            <p>{order?.payment?.amount/100}$</p>
            <p>{order?.books.length}</p>
            <p>{order?.status}</p>
          </div>
        ))}
        </div>
    </div>
  )
}

export default AdminOrders