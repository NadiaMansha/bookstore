import React from 'react'
import './AdminOrders.css'
import { useSelector,useDispatch } from 'react-redux'
import { selectAllOrders,fetchOrders } from '../ordersSlice'

const AdminOrders = () => {
  const dispatch = useDispatch()
  const orders = useSelector(selectAllOrders)
  React.useEffect(() => {
    dispatch(fetchOrders())
  }, [dispatch])
console.log(orders)
  return (
    <div className="admin_orders">
      <h1>orders</h1>
       {
          orders?.map(order => (
            <div key={order._id} className="admin_orders__order">
              <div className="admin_orders__order__id">
                <p>{order._id}</p>
              </div>
              <div className="admin_orders__order__user">
                <p>{order.name}</p>
              </div>
              <div className="admin_orders__order__date">
                <p>{order?.createdAt?.substring(0, 10)}</p>
              </div>
              
              <div className="admin_orders__order__paid">
                <p>{order.payment ? order.payment?.amount/100:""}</p>
              </div>
              <div className="admin_orders__order__delivered">
                <p>{order.status ? order.status.substring(0, 10) : 'No'}</p>
              </div>
              <div className="admin_orders__order__details">
                <button>Details</button>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default AdminOrders