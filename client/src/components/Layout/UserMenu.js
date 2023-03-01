import React from 'react'
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  return (
    <div>
         <div className="text-center">
    <div className="list-group">
 <h1>Dashboard</h1>
  <NavLink to="/dashboard/user/create-category" className="list-group-item list-group-item-action">Create Category</NavLink>
  <NavLink to="/dashboard/user/create-product" className="list-group-item list-group-item-action">Create Product</NavLink>
  <NavLink to="/dashboard/user/users" className="list-group-item list-group-item-action">Users</NavLink>
  
</div>
    </div>
    </div>
  )
}

export default UserMenu