import React from 'react';
const imgUrl = "src/assets/about-image.jpg"

export default function About(){
  return ( 
    <div className="about-page-container">
      <div className="frame">
      <img src={imgUrl} />
        </div>
      <div className="about-page-content">
        <h1>Go on a VanVenture!</h1>
        <p>At VanVentures, we believe in the power of travel to inspire and rejuvenate. Our mission is to provide you with the perfect vehicle for your journey, combining comfort, reliability, and adventure. Each of our vans is designed with you in mind, featuring all the amenities you need to make your trip unforgettable. From the mountains to the sea, our vans are your home on wheels.</p>
        <h2>How It Works</h2>
        <ul>
          <li>Choose Your Van**: Browse our diverse fleet of vans, each tailored for different types of adventures. Select the one that suits your needs and budget.</li>
          <li>Book Online**: Easily book your chosen van through our user-friendly website. Just pick your dates and complete the reservation process in a few simple steps.</li>
          <li>Pick Up & Go**: Pick up your van from our convenient location and hit the road. We’ll provide you with a thorough orientation to ensure you’re comfortable with all the features.</li>
          <li>Explore: Enjoy your adventure with the peace of mind that our vans are well-maintained and fully equipped. Create memories that will last a lifetime.</li>
        </ul>
      </div>
    </div>
  )
}