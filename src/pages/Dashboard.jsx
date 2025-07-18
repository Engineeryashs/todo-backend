import React from 'react';
import { Navbar } from '../components/Navbar';
import Addtodo from '../components/Addtodo';
import TodoList from '../components/TodoList';
import { useState } from 'react';
function Dashboard() {
        const [todos,setTodos]=useState([]);
    return (
        <>
            <Navbar />
            <Addtodo todos={todos} setTodos={setTodos}/>
            <TodoList/>
        </>
    )
} 

export default Dashboard
