import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
    // Get token from localStorage to check if user is authenticated
    const token = localStorage.getItem("token");

    return (
        <div>
            {/* 
              If token exists (user is logged in), render child routes via <Outlet />.
              Otherwise, redirect the user to the root route ("/") using <Navigate />.
            */}
            {token ? <Outlet /> : <Navigate to="/" />}  {/*Here will be children routes of it*/}
        </div>
    )
}

export default ProtectedRoute;
