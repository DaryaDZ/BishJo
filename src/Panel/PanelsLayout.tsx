import React from 'react'
import PanelsNavbar from './PanelsNavbar'
import { Outlet } from "react-router-dom";


function PanelsLayout() {
  return (
    <div style={{backgroundColor: "#E9F2FB", height: "900px", display: "flex", justifyContent: "center", alignItems: "center", }}>
      <div style={{width:"1000px", height: "780px", backgroundColor: "#FFFFFF", borderRadius: "24px" }}>
       < PanelsNavbar/>
      < Outlet />
      </div>
    </div>
  )
}

export default PanelsLayout
