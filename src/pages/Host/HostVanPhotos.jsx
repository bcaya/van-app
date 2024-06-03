import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPhoto(){
  const {currentVan} = useOutletContext()
  return(
    <box-l>
      <img src={currentVan.imageUrl} className="host-van-detail-image"/>
    </box-l>
  )
}