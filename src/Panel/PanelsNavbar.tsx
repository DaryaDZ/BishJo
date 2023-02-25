import React from 'react'
import { Link } from 'react-router-dom';
import LogoFooter from "../Assets/LogoFooter.png";
import Mail from "../Assets/Mail.png";



function PanelsNavbar() {
  return (
    <div style={{display: "flex", direction: "rtl", justifyContent: "space-between", marginTop: "40px"}}>
    <div style={{display: "flex",
     justifyContent: "right",
    //  marginTop: "20px",
     alignItems: "right"}}>
      <div style={{display: "flex"}}>
        <Link to='dashboard' >
        <div style={{marginRight: "50px", fontWeight: "400px", fontSize: "16px",cursor: "pointer", color: "#000000"}} >داشبورد</div>
        </Link>
        <div style={{marginRight: "20px", fontWeight: "400px", fontSize: "16px",cursor: "pointer", color: "#000000"}}>محتوای سایت</div>
        <div style={{marginRight: "20px", fontWeight: "400px", fontSize: "16px",cursor: "pointer", color: "#000000"}}>اساتید</div>
        <div style={{marginRight: "20px", fontWeight: "400px", fontSize: "16px",cursor: "pointer", color: "#000000"}}>پیام کاربران</div>
      </div>
    </div>

    <div style={{display: "flex",
    // marginTop: "20px"

     direction: "ltr"
     }} >
      <div style={{marginLeft: "50px"}} >
        <img style={{width: "100px", height: "30px"}} src={LogoFooter} />
      </div>
      <div>
      <img style={{width: "35px", height: "30px", marginLeft: "10px",justifyContent:"center" , alignItems: "center"}}  src={Mail} />
      </div>

    </div>
    </div>
  )
}

export default PanelsNavbar
