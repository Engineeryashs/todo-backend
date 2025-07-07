import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import  LoginSignup  from './pages/LoginSignup'
function App() {

  return (
 
    <div className='flex bg-cyan-200 flex-col h-screen'>
      <main className='flex h-screen w-[100%] items-center justify-center mx-auto my-4'>
 <LoginSignup></LoginSignup>
      </main>
    </div>
  )
}

export default App
