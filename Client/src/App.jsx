import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import './assets/prism.css'
import { useAppContext } from './context/AppContext'

const App = () => {

  const { user } = useAppContext()

  



  return (

    <>

    {user ? (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    ) : (
      <div className='bg-gradient-to-b from-[#242124] to-[#000000] flex items-center h-screen w-screen'>
        <Login />
      </div>
    )}



    
    </>
  )
}

export default App
