import React from 'react'
import { useState } from 'react';
const Addtodo = ({todos,setTodos}) => {

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    function addTodo(){
 {/**Using spread operator to add new element in an existing array it copies existing array into new one add new elemeent in it*/ }
       setTodos([...todos,{id:Date.now(),title,description}]);
       setTitle("");
       setDescription("");
    }
  return (
    <div className="mx-auto my-4 rounded-xl p-4 bg-cyan-100 min-h-[200px] w-3/4">
                <div>
                    <h2 className='text-lg font-bold'>Add To-Do</h2>
                    <div className='flex justify-between mt-4'>
                        <div className="flex gap-8">
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="title" className="text-sm font-medium">Title</label>
                                <input type="text" name="title" id="title" placeholder='title' className='bg-white rounded-lg px-5 py-1 w-[200px]' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="description" className="text-sm font-medium">Description</label>
                                <input type="text" name="description" id="description" placeholder='description' className='bg-white rounded-lg px-5 py-1 w-[200px]' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                            </div>
                        </div>
                            <div>
                                <button className='w-20 py-2 bg-emerald-400 hover:bg-emerald-600 text-white text-sm font-medium rounded-lg cursor-pointer px-4 transition-colors duration-200' onClick={addTodo}>Add</button>
                    </div>
                    </div>
                </div>
            </div>
  )
}

export default Addtodo;
