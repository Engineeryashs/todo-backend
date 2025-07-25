import React from 'react'

const Update = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='text-center text-2xl font-bold mb-6 text-slate-800 shadow-md'>Update Profile</div>
      <div className='flex flex-col bg-white rounded-lg shadow-md p-8 w-[400px]'>
    
    <div className='space-y-2'>
        <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name:
                      </label>
                      <input type="text" name="updateName" id="updateName" placeholder='Update Name' className='p-2 m-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-slate-500 focus:outline-none'/>

    </div>
    <div className='space-y-2'>
     <label className="block text-sm font-medium text-gray-700 mb-2">
                        LastName:
                      </label>
                 <input type="text" name="updateLastName" id="updateLastName" placeholder='Update LastName' className='p-2 m-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-slate-500 focus:outline-none'/>
    </div>
    <div className='space-y-2'>


         <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password:
                      </label>
                    <input type="text" name="updatePassword" id="updatePassword" placeholder='Update password' className='p-2 m-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-slate-500 focus:outline-none'/>
    </div>
                   

    
        
         
             <button className='cursor-pointer bg-slate-500 p-4 m-2 border border-slate-300 rounded-md w-full hover:bg-slate-600'>Update Profile</button>
        
       
      </div>
    </div>
  )
}

export default Update;
