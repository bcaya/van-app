import React from 'react'
import { useParams, Link, NavLink, Outlet} from "react-router-dom"



export default function HostVanDetail(){
  const {id} = useParams()
  const [currentVan, setCurrentVan] = React.useState(null)

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color:"#161616"
  }

React.useEffect(() => {
  fetch(`/api/host/vans/${id}`)
    .then(res => res.json())
    .then(data => setCurrentVan(data.vans))
}, [])

if(!currentVan){
  return<h1>Loading...</h1>
}
return(
  <section>
    <Link 
      to=".." //this is a link back to the relative path aka so you can go back to what you weere prev looking at. 
      relative="path"
      className="back-button"
      >&larr; <Span>Back to all the vans</Span></Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-details">
        <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
        </div>
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
      </div>
  </section>
)
}