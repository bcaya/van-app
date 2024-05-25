import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Layout from './components/Layout.jsx';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Vans from './pages/Vans/Vans.jsx'
import VanDetail from './pages/Vans/VanDetail.jsx';
import Host from './pages/Host.jsx';
import ContactUs from './pages/ContactUs.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css'
import "../server.js"

function App() {

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}/>
          <Route path="vans" element={<Vans/>}/>
          <Route path="vans/:id" element={<VanDetail/>}/>
          <Route path="contact-us" element={<ContactUs />}/>
          <Route path="host" element={<Host/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
