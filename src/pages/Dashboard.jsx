import React from 'react';
import { Navbar } from '../components/Navbar';
import Addtodo from '../components/Addtodo';
import TodoList from '../components/TodoList';

function Dashboard() {
    return (
        <>
            <Navbar />
            <Addtodo/>
            <TodoList/>
        </>
    )
}

export default Dashboard
