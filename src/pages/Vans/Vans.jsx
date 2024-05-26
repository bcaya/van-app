import React from 'react'
import {Link, useSearchParams} from 'react-router-dom'

export default function Vans(){
  const [searchParams, setSearchParams] = useSearchParams()
  const [vans, setVans] = React.useState([])

  const typeFilter = searchParams.get("type")
  React.useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
    
  },[])

  const displayedVans = typeFilter
    ? vans.filter(van => van.type === typeFilter)
    : vans 

  const vanCards = displayedVans.map(van => (
    <div key={van.id} className="van-card stack">

      <Link to={`/vans/${van.id}`}>
        <div className="frame-sq">
        <img src={van.imageUrl} />
        </div>
        <div className="van-details">
        <h3>{van.name}</h3>
        <p>${van.price}</p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ))

  return(
    <div className="van-list-container">
      <p>
        Explore our range of high-quality vans, each designed for a unique adventure. Whether you’re a solo traveler, a couple, or a family, we have the perfect van for you.</p>
        <div className="van-list-filter-buttons">
                <Link 
                    to="?type=family"
                    className="van-type family"
                >Family</Link>
                <Link 
                    to="?type=leisure"
                    className="van-type leisure"
                >leisure</Link>
                <Link 
                    to="?type=adventure"
                    className="van-type adventure"
                >Adventure</Link>
                <Link 
                    to="?type=city"
                    className="van-type city"
                >City</Link>
                <Link 
                    to="."
                    className="van-type clear-filters"
                >Clear filter</Link>
            
            </div>
      <div className="van-list box">
        {vanCards}
      </div>
    </div>
  )
}


//description:"The Wilderness Wanderer is perfect for those who crave adventure. With off-road capabilities, a rooftop tent, and ample storage, it’s ready to take you anywhere."
// hostId: "124"
// id: "2"
// imageUrl: "https://unsplash.com/photos/lWzW9EJ3xJc"
// name : 
// "Wilderness Wanderer"
// price:75
// type : "adventure"
//