import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Vans from './pages/Vans/Vans.jsx'
import VanDetail from './pages/Vans/VanDetail.jsx';
import HostLayout from './components/HostLayout.jsx'
import Dashboard from './pages/Host/Dashboard.jsx';
import HostVanDetail from './pages/Host/HostVanDetail.jsx';
import HostVanInfo from './pages/Host/HostVanInfo.jsx';
import HostVanPhoto from './pages/Host/HostVanPhotos.jsx';
import HostVanPricing from './pages/Host/HostVanPricing.jsx';
import HostVans from './pages/Host/HostVans.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
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
          <Route path="vans" element={<Vans/>}/>
          <Route path="vans/:id" element={<VanDetail/>}/>
          <Route path="contact-us" element={<ContactUs />}/>
          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="income" element={<Income />}/>
            <Route path="reviews" element={<Reviews />}/>
            <Route path="vans" element={<HostVans />}/>
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo/>}/>
              <Route path="pricing" element={<HostVanPricing/>}/>
              <Route path="photos" elements={<HostVanPhoto />}/>
            </Route>
          </Route>
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
