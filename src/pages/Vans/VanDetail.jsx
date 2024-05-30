import React from "react"
import { useParams } from "react-router-dom"
import { Box, Cluster} from "../../assets/CSS/StylesMain"

export default function VanDetail(){
  const params = useParams()
  const [van, setVan] = React.useState(null)

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  },[params.id])
console.log(van)
  return (
    <div className="van-detail-container ">
        {van ? (<box-l padding="var(--s2)">
          <div className="van-detail box">
                  <cluster-l>
                  <img src={van.imageUrl} />
                  <div>
                  <h2>{van.name}</h2>
                  </div>
                
                  <div>
                  <p className="van-price"><span>${van.price}</span>/day</p>
                  </div>
                  <div>
                 <i className={`van-type ${van.type} selected`}>
                      {van.type}
                  </i>
                  </div> 
                <div>
                <p>{van.description}</p>
                </div>
                 <div>
                 <button className="link-button">Rent this van</button>
                 </div>
                
                  </cluster-l>
                
              </div>
        </box-l>
                
            ) : <h2>Loading...</h2>}
    </div>
  )
}