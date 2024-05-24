import { useState } from 'react'
import './App.css'
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
