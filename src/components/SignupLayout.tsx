import React from "react";
import { Outlet } from "react-router-dom";
import "./Signup.css";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import FlashBack from "../Assets/FlashBack.png";


function Signuplayout() {
  return (
    <div className="App">
      <div className="maindiv">
        <Link to='/' className="returnLogo" >
        <div className="Return"> 
        <img className="logoreturn" src={FlashBack} alt="" /> بازگشت 
         </div>
        </Link>
        <div className="sabtenam">ثبت نام کنید</div>
        <div className="bishjoLogo">
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className="aHover">
        <Link to='signup' >
        <button className="YellowOne">دانشجو</button>
        </Link>

        <Link to="./masterssignup">
          <button className="whiteOne">استاد</button>
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Signuplayout;
