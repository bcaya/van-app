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

      <Link 
        to={van.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter
        }}>
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

  function handleFilterChange(key, value){
    setSearchParams(prevParams => {
      if(value === null){
        prevParams.delete(key)
      }else {
        prevParams.set(key,value)
      }
      return prevParams
    })
  }

  return(
    <div className="van-list-container">
      <p>
        Explore our range of high-quality vans, each designed for a unique adventure. Whether you’re a solo traveler, a couple, or a family, we have the perfect van for you.</p>
        <div className="van-list-filter-buttons">
                <button 
                    onClick={() => handleFilterChange("type", "family")}
                    className={
                      `van-type family
                      ${typeFilter === "family" ? "selected" : "" }`
                    }
                >Family</button>
                <button 
                  onClick={() => handleFilterChange("type", "leisure")}
                  className={
                    `van-type leisure
                    ${typeFilter === "leisure" ? "selected" : "" }`
                  }
                >Leisure</button>
                <button 
                   onClick={() => handleFilterChange("type", "adventure")}
                   className={
                     `van-type adventure
                     ${typeFilter === "adventure" ? "selected" : "" }`
                   }
                >Adventure</button>
                <button 
                  onClick={() => handleFilterChange("type", "city")}
                  className={
                    `van-type city
                    ${typeFilter === "city" ? "selected" : "" }`
                  }
                >City</button>
                { typeFilter ? (
                  <button 
                    onClick={() => handleFilterChange("type", null)}
                    className="van-type clear-filters"
                    >Clear Filters</button>
                ) : null }
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