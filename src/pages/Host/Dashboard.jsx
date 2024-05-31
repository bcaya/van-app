import React from 'react'
import { Link } from "react-router-dom"
import { getHostVans } from '../../../api'
import {Box, Stack, Cluster, Center, Grid} from '../../assets/CSS/StylesMain'
import { BsStarFill } from 'react-icons/bs'
export default function Dashboard(){
  const [vans, setVans] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  React.useEffect(() => {
    setLoading(true)
    getHostVans()
      .then(data => setVans(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  function renderVanElements(vans){
    const hostVansElements = vans.map((van) => (
        <box-l className="host-van-single" key={van.id}>
           
            <img src={van.imageUrl} alt={`photo of ${van.name}`} />
         
          <div>
          <cluster-l className="host-van-info">
          
          <h3>{van.name}</h3>
          <p>${van.price}</p>
      </cluster-l>
      <Link to={`vans/${van.id}`}>View</Link>
          </div>
         
            
        </box-l>
    ))
    return (
      <box-l>
        {hostVansElements}
      </box-l>
    )
  }

  if(error){
    return <h1>Error: {error.message}</h1>
  }
  return(
    <box-l>
      <cluster-l className="dashboard-header" justify="flex-start">
      <box-l className="info">
          <h1>Welcome!</h1>
          <p>Income last <span>30 days</span></p>
          <h2>$2,260</h2>
        </box-l>
      <box-l className="host-dashboard-reviews">
      <box-l> 
           <h2>Review Score</h2>
         
        <p><span>5.0</span>  <BsStarFill className="review-star"  /></p>
       
      </box-l>
        <Link to="reviews">View all</Link>
      </box-l>
      </cluster-l>
      <div className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed vans</h2>
          <Link to="vans">View all</Link>
        </div>
        
        {
          loading && !vans 
          ? <h1>Loading...</h1>
          : (
            <>      <grid-l min="calc(var(--measure) / 2)">
            {renderVanElements(vans)}
          </grid-l>
             
            </>
          )
        }
      </div>

        
    </box-l>
  )
}