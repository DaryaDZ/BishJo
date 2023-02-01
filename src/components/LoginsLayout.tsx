import React from 'react';
import { Outlet } from "react-router-dom";
import "./Signup.css";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import FlashBack from "../Assets/FlashBack.png";

function LoginsLayout() {
  return (
    <div className="App">
      <div className="maindiv">
        <Link to='/' className="returnLogo" >
        <div className="Return"> 
        <img className="logoreturn" src={FlashBack} alt="" /> بازگشت 
         </div>
        </Link>
        <div className="sabtenam"> وارد شوید </div>
        <div className="bishjoLogo">
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className="aHover">
        <Link to='login' >
        <button className="YellowOne">دانشجو</button>
        </Link>

        <Link to="./masterslogin">
          <button className="whiteOne">استاد</button>
        </Link>
      </div>

      <Outlet />
    </div>
  );
}


export default LoginsLayout
