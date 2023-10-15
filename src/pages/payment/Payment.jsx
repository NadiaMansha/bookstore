import React from "react";
import "./Payment.css";
import { cartSelector } from "../../features/cart/cartSlice";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import CardForm from "./CheckOutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe(
  "pk_test_51MxbuQL0OmplM2VE8Hb24JbnhlKDNX52d2cM9K57DmbraQOoa1t1z0yHLiF6pXkRvjjZfzNuLj6dpOh7T1MbYE0d00UaUK81fw"
);

const Payment = () => {
  const appearance = {
    theme: "stripe",
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
  });

  const cart = useSelector(cartSelector);
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Billing Details</h3>
          </div>
          <div className="payment__address">
            <input type="text" placeholder="name" name="name" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
             />
            <input type="text" placeholder="email"  name="email" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input type="tel" placeholder="phone number"  name="phone" 
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <input type="text" placeholder="address" name="address" 
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
             />
            <input type="text" placeholder="city" name="city" 
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
             />
            <input type="text" placeholder="state" name="state" 
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
             />
            <input type="text" placeholder="country" name="country" 
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
             />
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            <p>Total Items: {getTotal().totalQuantity}</p>
            <p>Total Price:{getTotal().totalPrice} $</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <Elements appearance={appearance} stripe={stripePromise}>
              <CardForm   formData={ formData}/>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
