import React from "react";
import "./Signup.css";
import { Button, TextField, InputAdornment } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EdgesensorHighIcon from '@mui/icons-material/EdgesensorHigh';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Link } from "react-router-dom";
import download from "../Assets/download.jpg";
import { Construction } from "@mui/icons-material";

function Signup() {
  
   
  return (
    <div className="App">
      <div className="first">
        <div>
          <div>
            <label className="firsttext">
              {" "}
              نام کاربری
            </label>
            <TextField
               placeholder="  نام کاربری خود را وارد کنید... "
               type="text"
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
              className="SecondInput"
              placeholder="...نام کاربری خود را وارد کنید"
            /> */}

          </div>
          <div>
            <div className="Secondtext">
              ایمیل
              {/* <PersonOutlineIcon /> */}
            </div>
            <TextField
               placeholder=" ایمیل خود را وارد کنید...  "
               type="email"
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
                    <AlternateEmailIcon />
                  </InputAdornment>
                ),
                style:{
                  height:"50px"
                }
              }}
            />
            
          </div>
          <div>
            <div className="Secondtext">
              شماره تلفن
            </div>
            <TextField
               placeholder="  شماره تلفن خود را وارد کنید... "
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
                    <EdgesensorHighIcon />
                  </InputAdornment>
                ),
                style:{
                  height:"50px"
                }
              }}
            />
            {/* <input
              className="SecondInput"
              placeholder="...شماره تلفن خود را وارد کنید"
            /> */}
          </div>
          <div>
            <div className="Secondtext">
              رمز عبور
            </div>
            <TextField
               placeholder=" رمز عبور خود را وارد کنید... "
               type="password"
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
                    <VpnKeyIcon />
                  </InputAdornment>
                ),
                style:{
                  height:"50px"
                }
              }}
            />
            {/* <input
              className="SecondInput"
              placeholder="...رمز عبور خود را وارد کنید"
            /> */}
          </div>

          <div className="recapat">

            <img className="axyek" src={download} />
          </div>
          <div>
            <button className="signupBtn">ثبت نام</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
