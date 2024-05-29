import React from 'react'
import {Link, useSearchParams} from 'react-router-dom'
import { Cluster, Box, Stack, Grid, Center } from '../../assets/CSS/StylesMain'

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
    <box-l key={van.id} className="van-card box">

      <Link 
        to={van.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter
        }}>
        <stack-l >
        <img src={van.imageUrl} />

        <cluster-l className="van-details">
        <h3>{van.name}</h3>
        <p>${van.price}</p>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </cluster-l>
      </stack-l>
      </Link>
    </box-l>
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
    <box-l className="van-list-container">
        <box-l>
        <cluster-l align="center" className="van-list-filter-buttons">
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
            </cluster-l>
          </box-l>
      <grid-l min="calc(var(--measure) / 3)">
        {vanCards}
      </grid-l>
    </box-l>
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