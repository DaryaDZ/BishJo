import { Label } from "@mui/icons-material";
import React from "react";
import { Button, TextField, InputAdornment } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import "./MastersSignup.css";
import download from "../Assets/download.jpg";


function MastersSignup() {
  return (
    <div className="FIRST">
      <div className="MastersMain">
        <div className="inputcontainer">
          {/* <Label className='mastertext' >نام کاربری</Label> */}
          <label className="mastertext">نام کاربری</label>
          <TextField
               placeholder="  نام کاربری خود را وارد کنید... "
              sx={{
                // width: openInput ? "450px" : "",
                width: "334px",
                // height: "60px",
                textAlign: "right",
                transition: "width 2s ease-in",
                // backgroundColor: "#3C4865",
                borderRadius: "12px",
                border: "10px solid #313b52",
                backgroundColor: "#eaf0ff",
                justifyContent: 'center',
                direction: 'rtl',



              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
                style:{
                  height:"50px"
                }
              }}
            />
          {/* <input
            className="masterinput"
            placeholder=" ...نام کاربری خود را وارد کنید "
          /> */}
        </div>
        <div>
          <label className="mastertext">شماره تلفن </label>
          <TextField
               placeholder=" شماره تلفن خود را وارد کنید... "
              sx={{
                // width: openInput ? "450px" : "",
                width: "334px",
                // height: "60px",
                textAlign: "right",
                transition: "width 2s ease-in",
                // backgroundColor: "#3C4865",
                borderRadius: "12px",
                border: "10px solid #313b52",
                backgroundColor: "#eaf0ff",
                direction: 'rtl',


              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIphoneIcon />
                  </InputAdornment>
                ),
                style:{
                  height:"50px"
                }
              }}
            />
          {/* <input
            className="masterinput"
            placeholder=" ...شماره تلفن خود را وارد کنید "
          /> */}
        </div>
        <div>
          
        <div className="recapat">
            
            <img className="axyek" src={download} alt="" />
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
