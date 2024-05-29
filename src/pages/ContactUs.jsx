import React from 'react'
import {Box, Stack, Center} from '../assets/CSS/StylesMain'

export default function ContactUs(){
  return(
    <box-l className="contact-container">
      <center-l className="contact-header">
        <stack-l>
        <h2 className="contact-h2">Contact Us</h2>
      
      <p>Have questions or need assistance? Our friendly team is here to help.</p>
      <ul>
      <li>**Email**: support@vanventures.com</li> 
      <li>**Phone**: 1-800-VANVENTURE</li> 
      <li>**Address**: 123 Adventure Road, Sunnyvale, CA</li>  
      </ul>
        <p>Follow us on social media for travel inspiration and updates.</p>
        <ul>
      <li>**Instagram**: @VanVentures</li> 
      <li>**Facebook**: /VanVentures</li> 
      <li>**Twitter**: @VanVentures</li>  
      </ul>
      
        </stack-l>
       
      </center-l>
    </box-l>
  )
}