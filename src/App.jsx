import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import LoginSignup from './pages/LoginSignup'
import Dashboard from './pages/Dashboard'
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'
import Update from './components/Update'
function App() {

  return (
    <HashRouter> {/*Like Car*/}
      <Routes>   {/*Like engine here in routes component we will have only route component of react-router-dom no any jsx or js etc*/} 
        <Route path="/protectedRoute" element={<ProtectedRoute/>}>
        <Route path="dashboard" element={<Dashboard />}/>
            <Route path="update" element={<Update/>}/>
        </Route>
      
        <Route path="/" element={ <div className='flex bg-gray-200 flex-col h-screen'>
          <main className='flex h-screen w-[100%] items-center justify-center mx-auto my-4'>
            <LoginSignup/>
          </main>
        </div>}></Route> {/*Like Destination*/}
       
      </Routes>
    </HashRouter>
  )
}

export default App
