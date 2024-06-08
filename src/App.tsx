// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { LandingPage } from "./pages/LandingPage";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
      </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
