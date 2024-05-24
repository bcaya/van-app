import React from 'react'

export default function Vans(){
  const [vans, setVans] = React.useState([])
  React.useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
    
  },[])

  const vanCards = vans.map(van => (
    <div key={van.id} className="van-card">
      <img src={van.imageUrl} />
      <div className="van-details">
        <h3>{van.name}</h3>
        <p>${van.price}</p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ))

  return(
    <div className="van-list-container">
      <div className="van-list">
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