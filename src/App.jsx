import React from 'react'
import Nav from './Components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Form from './Pages/Form/Form.jsx'

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/form' element={<Form/>} />
    </Routes>
    </>
  )
}

export default App
