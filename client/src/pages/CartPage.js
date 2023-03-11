import React from 'react'
import Layout from './../components/Layout/Layout';
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  return (
    <Layout>
        <div className="container">
            <div className="row">
                <h1>Your cart</h1>
            </div>
        </div>
    </Layout>
  )
}

export default CartPage