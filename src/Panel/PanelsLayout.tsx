import React from 'react'
import PanelsNavbar from './PanelsNavbar'
import { Outlet } from "react-router-dom";
import Manu from "../Assets/ICONS/Menu.png"
import './Panel.css'



function PanelsLayout() {
  return (
    <div style={{backgroundColor: "#E9F2FB", height: "900px", display: "flex", justifyContent: "center", alignItems: "center", }}>
      <div style={{width:"1000px", height: "780px", backgroundColor: "#FFFFFF", borderRadius: "24px" }}>
        <div> 
          <img className='panelssidebar'  src={Manu} /> 
        </div>
       < PanelsNavbar/>
      < Outlet />
      </div>
    </div>
  )
}

export default PanelsLayout
