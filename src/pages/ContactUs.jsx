import React from 'react'
import {Box, Stack, Center, Cluster, Sidebar, Frame} from '../assets/CSS/StylesMain'

export default function ContactUs(){
  return(
    <box-l className="contact-container">
      <sidebar-l side="right" content-min="66.6%" noStretch>
        <frame-l ratio="4:5">
        <img src='src/assets/contact-us-sm.jpg'></img>
        </frame-l>

      <box-l className="contact-header">
        <stack-l>
          <h1 className="contact-h2">Contact Us</h1>
        <p>Have questions or need assistance? Our friendly team is here to help.</p>
        <ul>
          <stack-l>
            <li>Email: support@vanventures.com</li> 
            <li>Phone: 1-800-VANVENTURE</li> 
            <li>Address: 123 Adventure Road, Sunnyvale, CA</li>  
          </stack-l>
        </ul>
      <h2>Follow us on social media for travel inspiration and updates.</h2>
          <ul>
            <stack-l>
              <li>Instagram: @VanVentures</li> 
              <li>Facebook: /VanVentures</li> 
              <li>Twitter: @VanVentures</li>  
            </stack-l>
          </ul>
        </stack-l>
      </box-l>
      </sidebar-l>

    </box-l>
  )
}