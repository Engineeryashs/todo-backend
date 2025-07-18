import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const ProtectedRoute=()=> {
    const token=localStorage.getItem("token");

  return (
    <div>
    
      {token?<Outlet/>:<Navigate to="/"  /> }             {/*Here will be children routes of it*/}
    </div>
  )
}

export default ProtectedRoute;
