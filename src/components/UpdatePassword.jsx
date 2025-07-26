import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Update = () => {
    const [updatePassword,setUpdatePassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    let navigate=useNavigate();
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='text-center text-2xl font-bold mb-6 text-slate-800 shadow-md'>Update Password</div>
      <div className='flex flex-col bg-white rounded-lg shadow-md p-8 w-[400px]'>
    
  
    <div className='space-y-2'>
     <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password:
                      </label>
                 <input type="password" name="updatePassword" id="updatePassword" placeholder='New password' className='p-2 m-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-slate-500 focus:outline-none' value={updatePassword} onChange={(e)=>{
                    setUpdatePassword(e.target.value)
                 }}/>
    </div>
    <div className='space-y-2'>


         <label className="block text-sm font-medium text-gray-700 mb-2">
                   Confirm Password:
                      </label>  
                    <input type="password" name="updateNewPassword" id="updateNewPassword" placeholder='Confirm New password' className='p-2 m-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-slate-500 focus:outline-none' value={confirmPassword} onChange={(e)=>{
                        setConfirmPassword(e.target.value)
                    }}/>
    </div>
             <button className='cursor-pointer bg-slate-500 p-4 m-2 border border-slate-300 rounded-md w-full hover:bg-slate-600' onClick={async ()=>{
try {
    if(updatePassword!=confirmPassword)
    {
        alert("Password doesn't match successfully")
        return
    }
    const token=localStorage.getItem("token");
    let response =await axios.put("http://localhost:3000/api/vi/user/updateProfile",{
        updatePassword:updatePassword
    },{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    console.log(response);
    navigate("/protectedRoute/dashboard")
} catch (error) {
    console.log(error)
}
             }}>Update Profile</button>
      </div>
    </div>
  )
}

export default Update;
