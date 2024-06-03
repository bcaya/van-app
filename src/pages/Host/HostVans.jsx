import React from 'react'
import { Link } from "react-router-dom"
import { Box, Stack} from '../../assets/CSS/StylesMain'
import { getHostVans } from '../../../api'

export default function HostVans(){
  const [vans, setVans] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

React.useEffect(() => {
  async function loadVans(){
    setLoading(true)
    try {
      const data = await getHostVans()
      setVans(data)
    } catch(err){
      setError(err)
    } finally {
      setLoading(false)
    }
  }
  loadVans()
},[])
  

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
  if(loading){
    return <h1>Loading...</h1>
  }
  if(error){
    return <h1>There was an error: {error.message}</h1>
  }
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