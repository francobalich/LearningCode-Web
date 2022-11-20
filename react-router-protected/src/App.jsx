import { useState } from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css'
import {Landing}  from './pages/index'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/landing" element={<Landing />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
