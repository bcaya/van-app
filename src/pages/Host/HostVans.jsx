import React from 'react'
import { Link } from "react-router-dom"

export default function HostVans(){
  const [vans, setVans] = React.useState([])

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
  }, [])
  

  const hostVanCards = vans.map(van => (
    <Link
      to={van.id}
      key={van.id}
      className="host-van-link-wrapper"
    >
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}</p>
        </div>
      </div>
    </Link>
  ))
  return(
    <section>
      <h1 className="host-vans-title">Your current vans</h1>
      <div className="host-vans-list">
        {
          vans.length > 0 ? (
            <section>
              {hostVanCards}
            </section>
          ) : (
            <h2>Loading...</h2>
          )
        }
      </div>
    </section>
  )
}