import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import LoginSignup from './pages/LoginSignup'
import Dashboard from './pages/Dashboard'
import { HashRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <HashRouter> {/*Like Car*/}
      <Routes>   {/*Like engine here in routes component we will have only route component of react-router-dom no any jsx or js etc*/}  
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={ <div className='flex bg-cyan-200 flex-col h-screen'>
          <main className='flex h-screen w-[100%] items-center justify-center mx-auto my-4'>
            <LoginSignup/>
          </main>
        </div>}></Route> {/*Like Destination*/}
       
      </Routes>
    </HashRouter>
  )
}

export default App
