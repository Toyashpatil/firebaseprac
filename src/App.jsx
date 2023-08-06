import React from 'react'
import AuthState from './context/AuthState'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/Login'
import Register from './pages/Register'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthState>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </AuthState>
      </BrowserRouter>
    </div>
  )
}

export default App