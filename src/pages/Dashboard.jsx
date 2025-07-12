import React from 'react';
import { Navbar } from '../components/Navbar';
function Dashboard() {
    return (
        <>
            <Navbar />
            <div className="mx-auto my-4 rounded-xl p-5 bg-cyan-100 h-[200px] w-3/4">
                
                    <div>
                        <h2 className='text-lg font-bold'>Add To-Do</h2>
                        <div className="flex gap-4">
                            <div className='flex flex-col gap-2'>
                             <h3>Title</h3>
                                         <input type="text" name="title" id="title" placeholder='title' className='bg-white rounded-lg' />
                            </div>
                            <div className='flex flex-col gap-2'>
                             <h3>Description</h3>
                               <input type="text" name="description" id="description" placeholder='description' className='bg-white rounded-lg' />
                            </div>
                            <div>
                              <button className='cursor-pointer bg-emerald-400 hover:bg-emerald-600 text-white rounded-lg p-3 py-1 px-3 mt-2'>Add Todo</button>
                            </div>
                        </div>
                    </div>
                    <h2 className='text-xl font-bold'>Hello World</h2>
                
            </div>
        </>
    )
}

export default Dashboard
