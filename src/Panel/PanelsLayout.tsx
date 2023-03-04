import React from 'react'
import PanelsNavbar from './PanelsNavbar'
import { Outlet } from "react-router-dom";
import Manu from "../Assets/ICONS/Menu.png"
import './Panel.css'
import { useState,useEffect } from "react";
import { Button, TextField, InputAdornment } from "@mui/material";





function PanelsLayout() {
  
  const [openButton, setOpenButton] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean>(true);
  
  return (
    <div style={{backgroundColor: "#E9F2FB", height: "900px", display: "flex", justifyContent: "center", alignItems: "center", }}>
      <div style={{width:"1000px", height: "780px", backgroundColor: "#FFFFFF", borderRadius: "24px" }}>
        <div> 
          <button 
          onClick={() => {
            setOpenButton(!openButton);
            setShowBtn(!showBtn);
          }}
          >
          <img className='panelssidebar'  src={Manu} style={{cursor: "pointer"}} /> 
          </button>
          {openButton && (
          
                    <Button
                      onClick={() => {
                        setOpenButton(!openButton);
                        setShowBtn(!showBtn);
                      }}
                      className='openedButton'
                    >
                      salam
                       {/* <img className='panelssidebarOpened'  src={Manu} style={{cursor: "pointer"}} />  */}
                    </Button>
          )}
          
        </div>
       < PanelsNavbar/>
      < Outlet />
      </div>
    </div>
  )
}

export default PanelsLayout
