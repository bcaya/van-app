import React from 'react'
import {Box, Stack, Center, Cluster, Sidebar, Frame} from '../assets/CSS/StylesMain'

export default function ContactUs(){
  return(
    <box-l className="contact-container">
      <sidebar-l side="left" content-min="20%" noStretch>
      <box-l>
      <div>

        <img src='src/assets/contact-us-sm.jpg'></img>
      
      </div>

      </box-l>  
      <box-l className="contact-header">
        <stack-l>
          <h1 className="contact-h2">Contact Us</h1>
        <p>Have questions or need assistance? Our friendly team is here to help.</p>     
            <div role="list">
            <div role="listitem">Email: support@vanventures.com</div> 
            <div role="listitem">Phone: 1-800-VANVENTURE</div> 
            <div role="listitem">Address: 123 Adventure Road, Sunnyvale, CA</div>  
            </div>
      <h2>Follow us on social media for travel inspiration and updates.</h2>
            <div role="list">
              <div role="listitem">Instagram: @VanVentures</div> 
              <div role="listitem">Facebook: /VanVentures</div> 
              <div role="listitem">Twitter: @VanVentures</div>  
            </div>
        </stack-l>
      </box-l>
      </sidebar-l>

    </box-l>
  )
}