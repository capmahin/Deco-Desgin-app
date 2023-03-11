import React from 'react'
import Layout from './../components/Layout/Layout';
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  return (
    <Layout>
        <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center bg-light p-2 mb-1">
                  {`Hellow ${auth?.token && auth?.user?.name}`}
                </h1>
                <h4 className="text-center">
                  {cart?.length > 1 ? `You Have ${cart.length} items in your cart ${auth?.token ?
                  "" : "please login to checkout"}
                  ` : 'Your cart is empty'}
                </h4>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-8">
                {
                  cart?.map( p => (
                    <div className="row mb-2 p-3 card flex-row">
                      <div className="col-md-4">
                      <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} width="100px" height= {"100px"} />
                      </div>
                      <div className="col-md-8">
                        <p>{p.name}</p>
                        <p>{p.description.substring(0,60)}</p>
                        <h5>Price : {p.price}</h5>
                        <button className="btn btn-danger">Remove</button>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className="col-md-4">
                Checkout | Payment
              </div>
            </div>
        </div>
    </Layout>
  )
}

export default CartPage