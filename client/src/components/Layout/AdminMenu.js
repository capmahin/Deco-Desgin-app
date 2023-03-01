import React from 'react'
import { NavLink } from "react-router-dom"

const AdminMenu = () => {
  return (
    <>
  <div className="list-group">
 
  <NavLink to="" className="list-group-item list-group-item-action">Create Category</NavLink>
  <NavLink to="" className="list-group-item list-group-item-action">Create Product</NavLink>
  <NavLink to="" className="list-group-item list-group-item-action">Users</NavLink>
  
</div>


    </>
  )
}

export default AdminMenu