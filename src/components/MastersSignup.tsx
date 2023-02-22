import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import "./MastersSignup.css";
import download from "../Assets/download.jpg";
import { useDispatch } from "react-redux";
import { signUpMaster } from "../features/Bishjo/MasterSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function MastersSignup() {
  const [Username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const SignUpMaster = () => {
      dispatch(signUpMaster({ username: Username, phoneNumber: phonenumber }))
      navigate('/loginslayout/masterslogin')
  }

  return (
    <div className="FIRST">
      <div className="MastersMain">
        <div className="inputcontainer">
          <label className="mastertext">نام کاربری</label>
          <TextField
            placeholder="  نام کاربری خود را وارد کنید... "
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
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
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
              width: "334px",
              textAlign: "right",
              transition: "width 2s ease-in",
              borderRadius: "12px",
              border: "10px solid #313b52",
              backgroundColor: "#eaf0ff",
              direction: "rtl",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIphoneIcon />
                </InputAdornment>
              ),
              style: {
                height: "50px",
              },
            }}
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
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
          <button
            className="signupBtn"
            onClick={SignUpMaster}
          >
            ثبت نام
          </button>
        </div>
      </div>
    </div>
  );
}

export default MastersSignup;
