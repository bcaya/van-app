import {Link} from "react-router-dom"

export default function Home(){
  return(
    <div className="home-container">
      <h1>Welcome to VanVentures!</h1>
      <p>Discover the freedom of the open road with VanVentures, your premier van rental service. Whether you’re planning a weekend getaway or a cross-country adventure, our fleet of fully equipped vans is ready to take you wherever your heart desires.</p>
      <p>Start your adventure today with VanVentures. Book your van now and get ready to explore the world like never before. Your journey begins here.</p>
      <Link to="vans">Find your van!</Link>
    </div>
  )
}