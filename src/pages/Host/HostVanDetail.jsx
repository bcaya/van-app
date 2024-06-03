import React from 'react'
import { useParams, Link, NavLink, Outlet} from "react-router-dom"
import { getVan } from '../../../api'



export default function HostVanDetail(){
  const {id} = useParams()
  const [currentVan, setCurrentVan] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color:"#161616"
  }

React.useEffect(() => {
  async function loadVans(){
    setLoading(true)
    try {
      const data = await getVan(id)
      setCurrentVan(data)
    } catch (err) {
      setError(err)
    } finally {
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
return(
  <section>
    <Link 
      to=".." //this is a link back to the relative path aka so you can go back to what you weere prev looking at. 
      relative="path"
      className="back-button"
      >&larr; <span>Back to all the vans</span></Link>

      <box-l className="host-van-detail-layout-container">
        <stack-l className="host-van-details">
        <box-l>
        <img src={currentVan.imageUrl} />
        </box-l>
                    <box-l className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </box-l>
        </stack-l>
        <nav className="host-van-detail-nav">
          <NavLink 
            to="."
            end
            style={({isActive}) => isActive ? activeStyles : null}
            >Details
            </NavLink>
            <NavLink 
            to="pricing"
            end
            style={({isActive}) => isActive ? activeStyles : null}
            >Pricing
            </NavLink>
            <NavLink 
            to="photos"
            end
            style={({isActive}) => isActive ? activeStyles : null}
            >Photos
            </NavLink>
        </nav>
        <Outlet context={{currentVan}}/>
      </box-l>
  </section>
)
}