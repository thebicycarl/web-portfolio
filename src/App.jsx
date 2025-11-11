import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ThirtyBirthday from './pages/ThirtyBirthday'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/30th" element={<ThirtyBirthday />} />
    </Routes>
  )
}

export default App

