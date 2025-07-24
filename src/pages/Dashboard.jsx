import React from 'react';
import { Navbar } from '../components/Navbar';
import Addtodo from '../components/Addtodo';
import TodoList from '../components/TodoList';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function Dashboard() {
        const [todos,setTodos]=useState([]);
        useEffect(()=>{
            const fetchTodos=async ()=>{
             const res=await axios.get("http://localhost:3000/api/vi/todosget",{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log(res.data.allTodos)
            setTodos(res.data.allTodos)
            }
           fetchTodos();
        },[])
    return (
        <>
            <Navbar />
            {/*Passing state todos into child components*/}
            <Addtodo todos={todos} setTodos={setTodos}/>
            <TodoList todos={todos} setTodos={setTodos}/>
        </>
    )
} 

export default Dashboard
