import React from 'react'
import {Box, Stack, Center, Cluster, Sidebar, Frame} from '../assets/CSS/StylesMain'

export default function ContactUs(){
  return(
    <box-l className="contact-container">
      <box-l className="contact-header">
        <stack-l>
          <box-l>
          <h1 className="contact-h2">Contact Us</h1>
        <p>Have questions or need assistance? Our friendly team is here to help.</p>     
            <stack-l role="list">
            <stack-l role="list">
            <div role="listitem">Email: support@vanventures.com</div> 
            <div role="listitem">Phone: 1-800-VANVENTURE</div> 
            <div role="listitem">Address: 123 Adventure Road, Sunnyvale, CA</div>  
            </stack-l>
          </box-l>
        <box-l>
        <h2>Follow us on social media for travel inspiration and updates.</h2>
            <stack-l role="list">
              <div role="listitem">Instagram: @VanVentures</div> 
              <div role="listitem">Facebook: /VanVentures</div> 
              <div role="listitem">Twitter: @VanVentures</div>  
            </stack-l>
        </box-l>
        </stack-l>
      </box-l>
    </box-l>
  )
}