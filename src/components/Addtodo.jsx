import axios from 'axios';
import React from 'react'
import { useState } from 'react';
//Functional component Addtodo rercieves todos and setTodos state as props
const Addtodo = ({todos,setTodos}) => {

    // State to manage the input title of the todo
    const [title,setTitle]=useState("");

    // State to manage the input description of the todo
    const [description,setDescription]=useState("");

    // Function to handle adding a new todo
    async function addTodo(){
        // If either title or description is empty (after trimming), alert the user and stop execution
        if (!title.trim() || !description.trim()) {
            alert("Please fill in both title and description.");
            return;
        }

        // Retrieve token from localStorage (authentication token)
        localStorage.getItem("token")

        // Send POST request to backend to create new todo with title and description
        let response=await axios.post("http://localhost:3000/api/vi/todos",
            {title,description},
            {
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}` // attach token for protected route
                }
            }
        )

        {/**Using spread operator to add new element in an existing array it copies existing array into new one add new elemeent in it*/ }
        setTodos([...todos,response.data.todo]); // update the todo list by adding new todo to previous todos

        // Clear the input fields after submission
        setTitle("");
        setDescription("");
    }

    return (
        <div className="mx-auto my-4 rounded-xl p-4 bg-gray-100 min-h-[200px] w-3/4">
            <div>
                <h2 className='text-lg font-bold'>Add To-Do</h2>
                <div className='flex justify-between mt-4'>
                    <div className="flex gap-8">
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="title" className="text-sm font-medium">Title</label>
                            {/* Controlled input field for title */}
                            <input type="text" name="title" id="title" placeholder='title' 
                                className='bg-white rounded-lg px-5 py-1 w-[200px]' 
                                value={title} 
                                onChange={(e)=>{setTitle(e.target.value)}}/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="description" className="text-sm font-medium">Description</label>
                            {/* Controlled input field for description */}
                            <input type="text" name="description" id="description" placeholder='description' 
                                className='bg-white rounded-lg px-5 py-1 w-[200px]' 
                                value={description} 
                                onChange={(e)=>{setDescription(e.target.value)}}/>
                        </div>
                    </div>
                    <div>
                        {/* Button to trigger addTodo function */}
                        <button 
                            className='w-20 py-2 bg-indigo-400 hover:bg-indigo-600 text-white text-sm font-medium rounded-lg cursor-pointer px-4 transition-colors duration-200' 
                            onClick={addTodo}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addtodo;
