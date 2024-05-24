import {Link} from "react-router-dom"

export default function Home(){
  return(
    <div className="home-container">
      <h1>Welcome to VanVentures!</h1>
      <p>Discover the freedom of the open road with VanVentures, your premier van rental service. Whether you’re planning a weekend getaway or a cross-country adventure, our fleet of fully equipped vans is ready to take you wherever your heart desires.</p>
      <Link to="vans">Find your van!</Link>
    </div>
  )
}