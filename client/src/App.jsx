import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Signin from './pages/signin'
import Signout from './pages/signout'
import Profile from './pages/profile'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-out" element={<Signout />} />
    </Routes>
    </BrowserRouter>
  )
}
