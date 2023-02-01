import { Label } from "@mui/icons-material";
import React from "react";
import "./MastersSignup.css";
import download from "../Assets/download.jpg";


function MastersSignup() {
  return (
    <div className="FIRST">
      <div className="MastersMain">
        <div className="inputcontainer">
          {/* <Label className='mastertext' >نام کاربری</Label> */}
          <label className="mastertext">نام کاربری</label>
          <input
            className="masterinput"
            placeholder=" ...نام کاربری خود را وارد کنید "
          />
        </div>
        <div>
          <label className="mastertext">شماره تلفن </label>
          <input
            className="masterinput"
            placeholder=" ...شماره تلفن خود را وارد کنید "
          />
        </div>
        <div>
          
        <div className="recapat">
            
            <img className="axyek" src={download} />
          </div>
        </div>
        <div>
        <button className="signupBtn">ثبت نام</button>
        </div>
      </div>
    </div>
  );
}

export default MastersSignup;
