import React from 'react'

const TodoList = () => {
  return (
    <div className='mx-auto my-1 rounded-xl p-8 bg-cyan-100 min-h-[100px] w-3/4 flex items-center justify-between'>
      <div>
        <input type="checkbox" name="isCompleted" id="isCompleted" className='p-4 m-4 w-5 h-5 text-green-500 bg-cyan-100 border-cyan-300 rounded focus:ring-green-500 focus:ring-2'/>
      </div>
      <div className='flex-1'>
        <h1 className='text-3xl font-bold text-cyan-400'>hi</h1>
        <p className='text-lg text-pink-400'>ss</p>
      </div>
      <div className='flex gap-3'>
        <button className='h-8 w-20 text-center cursor-pointer bg-emerald-400 hover:bg-emerald-600 text-white rounded-lg py-2 text-sm font-medium'>Edit</button>
        <button className='h-8 w-20 py-2 cursor-pointer bg-emerald-400 hover:bg-emerald-600 text-sm font-medium text-white rounded-lg'>Delete</button>
      </div>
    </div>
  )
}

export default TodoList
