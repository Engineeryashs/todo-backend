import axios from 'axios';
import React from 'react';
import { useState } from 'react';
const TodoList = ({ todos, setTodos }) => {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  function startEdit(todo) {
    setEditId(todo._id);
    setEditTitle(todo.title);
    setEditDescription(todo.description);
  }
  async function deleteTodo(id){
    const token=localStorage.getItem("token")
    try {
      let response=await axios.delete(`http://localhost:3000/api/vi/remove/${id}`,{
        headers:{Authorization:`Bearer ${token}`}
      })
      console.log(response)
      setTodos((prevTodos)=>prevTodos.filter((todo)=>todo._id!=id))
    } catch (error) {
      console.log(error)
    }
  }
  const token = localStorage.getItem("token");
  async function toggleTodo(id) {
    try {
      let toggle = await axios.put(`http://localhost:3000/api/vi/completed/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      console.log(toggle.data.todo)
      setTodos((prevTodos) =>
        prevTodos.map((todoEle) =>
          id === todoEle._id ? { ...todoEle, isCompleted: toggle.data.todo.isCompleted } : todoEle
        )//here we are using functional state update also in which we are finding todo in todos state array by using map
      )
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="mx-auto my-4 w-3/4">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No todos found</p>
      ) : (
        todos.map((todo) => (
          <div
            key={todo._id}
            className="mb-4 flex items-center justify-between rounded-xl bg-gray-100 p-6"
          >
            <div>
              <input
                type="checkbox"
                name="isCompleted"
                className="m-2 h-5 w-5 rounded border-gray-300 accent-indigo-600 text-gray-500 focus:ring-2 focus:ring-emerald-500"
                onChange={() => { toggleTodo(todo._id) }} checked={todo.isCompleted}
              />
            </div>
            <div className="flex-1">

              {editId === todo._id ?<div className='space-y-4'>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title:
                      </label>
                <input className="w-[250px] bg-white rounded-lg px-4 py-2 border border-2 border-blue-400 focus:border-blue-700 focus:outline-none" type="text" placeholder='Edit Title' value={editTitle} onChange={(e)=>{setEditTitle(e.target.value)}} />
                 </div> : <h1 className={`text-2xl font-bold ${todo.isCompleted == true ? "text-gray-700 line-through" : "text-gray-900"}`}>{todo.title}</h1>}


              {editId === todo._id ?<div className='space-y-4'>
                 <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description:
                      </label>
                       <input type="text" name="description" id="description" placeholder='description'
                className='bg-white rounded-lg px-4 py-2 w-[250px] block border border-2 border-blue-400 focus:border-blue-700 focus:outline-none'
                value={editDescription} onChange={(e)=>{
                  setEditDescription(e.target.value)
                }}/>
              </div>
                : <p className={`text-lg text-gray-600 ${todo.isCompleted == true ? "text-gray-400 line-through" : "text-gray-900"}`}>{todo.description}</p>}
            </div>
            <div className="flex gap-3">
              {editId===todo._id?<button className='h-8 w-20 cursor-pointer rounded-lg bg-green-400 py-2 text-sm font-medium text-white hover:bg-green-600' onClick={async ()=>{
                   try {
                    let response = await axios.put(`http://localhost:3000/api/vi/edit/${editId}`,{title:editTitle,description:editDescription},{
                      headers:{Authorization:`Bearer ${token}`}
                    })
                    console.log(response)
                    //Here we have to update local todo-state also because if we don't update it will only show old state so after back-end update we have to update local state too
                    setTodos((prevTodos)=>prevTodos.map((todo)=>todo._id===editId?{...todo,title:editTitle,description:editDescription}:todo
                    ))

                  
                    setEditId(null)
                   } catch (error) {
                    console.log(error)
                   }
              }}>Save</button>:<button className="h-8 w-20 cursor-pointer rounded-lg bg-indigo-400 py-2 text-sm font-medium text-white hover:bg-indigo-600" onClick={() => {
                startEdit(todo)
              }}>
                Edit
              </button>}
              
              {//Here we are doing conditional rendreing based on editId
                editId===todo._id?<button className='h-8 w-20 cursor-pointer rounded-lg bg-red-400 py-2 text-sm font-medium text-white hover:bg-red-600' onClick={()=>{setEditId(null)}}>Cancel</button>:
                <button className="h-8 w-20 cursor-pointer rounded-lg bg-indigo-400 py-2 text-sm font-medium text-white hover:bg-indigo-600" onClick={()=>{
                  deleteTodo(todo._id)
                }}>
                Delete
              </button>
              }
              
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;
