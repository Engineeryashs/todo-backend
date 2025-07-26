import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const [updateName,setUpdateName]=useState("");
  const [updateLastName,setUpdateLastName]=useState("");
  const navigate=useNavigate();
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='text-center text-2xl font-bold mb-6 text-slate-800 shadow-md'>Update Profile</div>
      <div className='flex flex-col bg-white rounded-lg shadow-md p-8 w-[400px]'>
    
    <div className='space-y-2'>
        <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name:
                      </label>
                      <input type="text" name="updateName" id="updateName" placeholder=' Name' className='p-2 m-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-slate-500 focus:outline-none' value={updateName} onChange={(e)=>{setUpdateName(e.target.value)}}/>

    </div>
    <div className='space-y-2'>
     <label className="block text-sm font-medium text-gray-700 mb-2">
                        LastName:
                      </label>
                 <input type="text" name="updateLastName" id="updateLastName" placeholder='LastName' className='p-2 m-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-slate-500 focus:outline-none' value={updateLastName} onChange={(e)=>{setUpdateLastName(e.target.value)}}/>
    </div>
             <button className='cursor-pointer bg-slate-500 p-4 m-2 border border-slate-300 rounded-md w-full hover:bg-slate-600' onClick={async ()=>{
               try {
                const token=localStorage.getItem("token")
                let response=await axios.put("http://localhost:3000/api/vi/user/updateProfile",{
                  updateName:updateName,
                  updateLastName:updateLastName
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
