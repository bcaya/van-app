import React from 'react'
import { Link } from "react-router-dom"
import { Box, Stack} from '../../assets/CSS/StylesMain'

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
      <stack-l className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}</p>
        </div>
      </stack-l>
    </Link>
  ))
  return(
    <box-l>
      <box-l>
      <h1 className="host-vans-title">Your current vans</h1>
      </box-l>
      <box-l className="host-vans-list">
      <grid-l min="240px">
        {
          vans.length > 0 ? (
            
             <box-l>{hostVanCards}</box-l> 
           
          ) : (
            <h2>Loading...</h2>
          )
        }
         </grid-l>
      </box-l>
    </box-l>
  )
}