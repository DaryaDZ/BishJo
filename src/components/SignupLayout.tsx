import React,{useState} from "react";
import { Outlet } from "react-router-dom";
import "./Signup.css";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import FlashBack from "../Assets/FlashBack.png";


function Signuplayout() {
  const [yellowBG, setYellowBG] = useState(false);

  const handleBG = () => {
    setYellowBG(!yellowBG)
  }
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
        <Link to='signup'style={{textDecoration:"none"}}>
        <button className={!yellowBG?"YellowOne":"MoverWhiteBG"} onClick={handleBG} >دانشجو</button>
        </Link>

        <Link to="./masterssignup" style={{textDecoration:"none",color:"#323232"}}>
          <button className={yellowBG? "MoveYellowBG" : "whiteOne"} onClick={handleBG}>استاد</button>
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Signuplayout;
