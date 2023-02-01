import React from "react";
import "./Signup.css";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link } from "react-router-dom";
import download from "../Assets/download.jpg";

function Signup() {
  return (
    <div className="App">
      <div className="first">
        <div>
          <div>
            <label className="firsttext">
              {" "}
              نام کاربری
              {/* <PersonOutlineIcon /> */}
            </label>
            {/* <div className='firsttext'>
              </div> */}
            <input
              className="SecondInput"
              type="text"
              placeholder="...نام کاربری خود را وارد کنید"
            />
            {/* <PersonOutlineIcon  className='icon1'/> */}
          </div>
          <div>
            <div className="Secondtext">
              ایمیل
              {/* <PersonOutlineIcon /> */}
            </div>
            <input
              className="SecondInput"
              type="email"
              placeholder=" ...ایمیل خود را وارد کنید"
            />
          </div>
          <div>
            <div className="Secondtext">
              شماره تلفن
              {/* <PersonOutlineIcon /> */}
            </div>
            <input
              className="SecondInput"
              type="number"
              placeholder="...شماره تلفن خود را وارد کنید"
            />
          </div>
          <div>
            <div className="Secondtext">
              رمز عبور
              {/* <PersonOutlineIcon /> */}
            </div>
            <input
              className="SecondInput"
              placeholder="...رمز عبور خود را وارد کنید"
              type="password"
            />
          </div>

          <div className="recapat">
            {/* img: "../Image/second.webp", */}

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
