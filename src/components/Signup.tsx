import React, { useState } from "react";
import "./Signup.css";
import { Button, TextField, InputAdornment } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EdgesensorHighIcon from "@mui/icons-material/EdgesensorHigh";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
// import { Link } from "react-router-dom";
import download from "../Assets/download.jpg";
// import { Construction } from "@mui/icons-material";
import { signupUser } from "../features/Bishjo/UserSlice";
import { useDispatch } from "react-redux";

function Signup() {
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <div className="first">
        <div>
          <div>
            <label className="firsttext"> نام کاربری</label>
            <TextField
              placeholder="  نام کاربری خود را وارد کنید... "
              type="text"
              sx={{
                width: "334px",
                textAlign: "right",
                transition: "width 2s ease-in",
                borderRadius: "12px",
                border: "10px solid #313b52",
                backgroundColor: "#eaf0ff",
                justifyContent: "center",
                direction: "rtl",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
                style: {
                  height: "50px",
                },
              }}
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <div className="Secondtext">
              ایمیل
            
            </div>
            <TextField
              placeholder=" ایمیل خود را وارد کنید...  "
              type="email"
              sx={{
                width: "334px",
                textAlign: "right",
                transition: "width 2s ease-in",
                borderRadius: "12px",
                border: "10px solid #313b52",
                backgroundColor: "#eaf0ff",
                justifyContent: "center",
                direction: "rtl",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailIcon />
                  </InputAdornment>
                ),
                style: {
                  height: "50px",
                },
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="Secondtext">شماره تلفن</div>
            <TextField
              placeholder="  شماره تلفن خود را وارد کنید... "
              sx={{
                width: "334px",
                textAlign: "right",
                transition: "width 2s ease-in",
                borderRadius: "12px",
                border: "10px solid #313b52",
                backgroundColor: "#eaf0ff",
                justifyContent: "center",
                direction: "rtl",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EdgesensorHighIcon />
                  </InputAdornment>
                ),
                style: {
                  height: "50px",
                },
              }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
    
          </div>
          <div>
            <div className="Secondtext">رمز عبور</div>
            <TextField
              placeholder=" رمز عبور خود را وارد کنید... "
              type="password"
              sx={{
                width: "334px",
                textAlign: "right",
                transition: "width 2s ease-in",
                borderRadius: "12px",
                border: "10px solid #313b52",
                backgroundColor: "#eaf0ff",
                justifyContent: "center",
                direction: "rtl",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyIcon />
                  </InputAdornment>
                ),
                style: {
                  height: "50px",
                },
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="recapat">
            <img src={download} alt="" className="axyek" />
          </div>
          <div>
            <button
              className="signupBtn"
              onClick={() =>
                dispatch(signupUser({username,email,phone,password}))
              }
            >
              ثبت نام
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
