import React from 'react'

const Addtodo = () => {
  return (
    <div className="mx-auto my-4 rounded-xl p-4 bg-cyan-100 min-h-[200px] w-3/4">
                <div>
                    <h2 className='text-lg font-bold'>Add To-Do</h2>
                    <div className='flex justify-between mt-4'>
                        <div className="flex gap-8">
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="title" className="text-sm font-medium">Title</label>
                                <input type="text" name="title" id="title" placeholder='title' className='bg-white rounded-lg px-5 py-1 w-[200px]' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="description" className="text-sm font-medium">Description</label>
                                <input type="text" name="description" id="description" placeholder='description' className='bg-white rounded-lg px-5 py-1 w-[200px]' />
                            </div>
                        </div>
                            <div>
                                <button className='w-20 py-2 bg-emerald-400 hover:bg-emerald-600 text-white text-sm font-medium rounded-lg cursor-pointer px-4 transition-colors duration-200'>Add</button>
                    </div>
                    </div>
                </div>
            </div>
  )
}

export default Addtodo;
