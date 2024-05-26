import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Login, Register } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/login' Component={Login} />
      <Route path='/register' Component={Register} />
    </Routes>
  )
}

export default App