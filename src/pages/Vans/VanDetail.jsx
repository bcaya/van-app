import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import { Box, Cluster} from "../../assets/CSS/StylesMain"
import { getVan } from "../../../api"

export default function VanDetail(){
  const {id} = useParams()
  const location = useLocation()
  const [error, setError] = React.useState(null)
  const [van, setVan] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
   async function loadVans(){
    setLoading(true)
    try{
      const data = await getVan(id)
      setVan(data)
    } catch(err){
      setError(err)
    }finally {
      setLoading(false)
    }
   }
   loadVans()
  },[id])
  
  if(loading){
    return <h1>Loading...</h1>
  }

  if(error){
    return <h1>There was an error: {error.message}</h1>
  }

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <box-l className="van-detail-container ">
      <box-l>
        <Link 
          to={`..${search}`}
          relative="path"
          className="back-button"
          >&larr; <span>Back to {type} vans</span></Link>
      </box-l>
        {van && (<box-l padding="var(--s2)">
          <div className="van-detail box">
                  <cluster-l>
                  <box-l>
                  <img src={van.imageUrl} />
                  </box-l>
                  <box-l>
                  <h2>{van.name}</h2>
                  </box-l>
                
                  <box-l>
                  <p className="van-price"><span>${van.price}</span>/day</p>
                  </box-l>
                  <box-l>
                 <i className={`van-type ${van.type} selected`}>
                      {van.type}
                  </i>
                  </box-l> 
                <box-l>
                <p>{van.description}</p>
                </box-l>
                 <box-l>
                 <button className="link-button">Rent this van</button>
                 </box-l>
                
                  </cluster-l>
                
              </div>
        </box-l>
                
            )}
    </box-l>
  )
}