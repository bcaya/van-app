import React from 'react'
import {Link, useSearchParams} from 'react-router-dom'
import { getVans } from '../../../api'
import { Cluster, Box, Stack, Grid, Center } from '../../assets/CSS/StylesMain'

export default function Vans(){
  const [searchParams, setSearchParams] = useSearchParams()
  const [vans, setVans] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const typeFilter = searchParams.get("type")
  React.useEffect(() => {
    async function loadVans(){
     setLoading(true)
      try{
        const data = await getVans()
        setVans(data)
      }catch (err){
        setError(err)
      }finally{
        setLoading(false)
      }
    }
    loadVans()
  }, [])

  const displayedVans = typeFilter
    ? vans.filter(van => van.type === typeFilter)
    : vans 

  const vanCards = displayedVans.map(van => (
    <box-l key={van.id} className="van-card box">
      <div>
      <Link 
        to={van.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter
        }}>
        <stack-l >
          <box-l>
            <img src={van.imageUrl} />
          </box-l>
        <cluster-l className="van-details">
       <div>
       <h3>{van.name}</h3>
        <p>${van.price}</p>
        </div> 
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </cluster-l>
      </stack-l>
      </Link>
      </div>
    
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
  if(loading){
    return<h1>Loading...</h1>
  }

  if(error){
    return <h1>There was an error: {error.message}</h1>
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
      <grid-l min="calc(var(--measure) / 2)">
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