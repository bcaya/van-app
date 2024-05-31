import {Link} from "react-router-dom"
import { Box, Stack, Cluster, Frame } from "../assets/CSS/StylesMain"
const imgUrl = "https://silver-bird.static.domains/about-image.jpg"
export default function Home(){
  return(
    <box-l padding="var(--s0)">
      <div className="home-container">
      <stack-l>
      <h1>Welcome to VanVentures!</h1>
      <p>Discover the freedom of the open road with VanVentures, your premier van rental service. Whether you’re planning a weekend getaway or a cross-country adventure, our fleet of fully equipped vans is ready to take you wherever your heart desires.</p>
      <p>Start your adventure today with VanVentures. Book your van now and get ready to explore the world like never before. Your journey begins here.</p>
      <Link to="vans">Find your van!</Link>
      </stack-l>
      
      </div>
      <box-l >
  <stack-l>
    <box-l padding="var(--s0)">
      <box-l className="about-page-container" padding="var(--s0)">
       <h3>Tell me more!</h3>
            <p>At VanVentures, we believe in the power of travel to inspire and rejuvenate. Our mission is to provide you with the perfect vehicle for your journey, combining comfort, reliability, and adventure. Each of our vans is designed with you in mind, featuring all the amenities you need to make your trip unforgettable. From the mountains to the sea, our vans are your home on wheels.</p>
    </box-l>
            
    <box-l padding="var(--s0)">
    <frame-l ratio="7:5" className="frame">
        <img src={imgUrl} />
        </frame-l>
    </box-l>
    </box-l> 
          <box-l padding="var(--s0)">
     
         <stack-l >
           <box-l padding="var(--s0)">
           <h2>How It Works</h2>
            </box-l> 
          <stack-l role="list" >
              <div role="listitem"><p><span className="strong">1. Choose Your Van:</span> Browse our diverse fleet of vans, each tailored for different types of adventures. Select the one that suits your needs and budget.</p></div>
              <div role="listitem"><p><span className="strong">2. Book Online:</span> Easily book your chosen van through our user-friendly website. Just pick your dates and complete the reservation process in a few simple steps.</p></div>
              <div role="listitem"><p><span className="strong">3. Pick Up & Go:</span> Pick up your van from our convenient location and hit the road. We’ll provide you with a thorough orientation to ensure you’re comfortable with all the features.</p></div>
              <div role="listitem"><p><span className="strong">4. Explore:</span> Enjoy your adventure with the peace of mind that our vans are well-maintained and fully equipped. Create memories that will last a lifetime.</p></div>
            </stack-l>
            </stack-l> 
          </box-l>
            </stack-l>
    </box-l>
    </box-l>
    
  )
}