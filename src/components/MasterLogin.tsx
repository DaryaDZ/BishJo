import React from "react";
import "./Login.css";
import { Button, TextField, InputAdornment } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

function MasterLogin() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div>
      <div className="loginsContainer">
        <div className="inputsContainer">
          <label className="text">نام کاربری یا ایمیل یا شماره تلفن</label>
          <TextField
               placeholder=" ... شماره تلفن یا نام کاربری خود را وارد کنید "
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
                color: '#1C1B1F',


              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Button
                    sx={{
                      backgroundColor: "#fdbe34",
                      color: "#323232",
                    }}
                    >
                      دریافت کد
                    </Button>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
                style:{
                  height:"50px"
                }
              }}
            />
        </div>
        <div>
          <label className="text">رمز عبور</label>
          <TextField
               placeholder=" ... رمز عبور خود را وارد کنید "
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


              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VpnKeyIcon />
                  </InputAdornment>
                ),
                style:{
                  height:"50px"
                }
              }}
            />
          {/* <input
            className="input"
            placeholder=" ...رمز عبور خود را وارد کنید "
          /> */}
        </div>
        <div className="remember">
          <div className="rememberme">
            <Box
              sx={{
                marginBottom: "10px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div className="rememberText">مرا به خاطر بسپار</div>
              <Checkbox
                {...label}
                defaultChecked
                size="small"
                sx={{
                  color: "#FDBE34",
                }}
              />
            </Box>
          </div>
          <div className="forgotPass">رمز را فراموش کردید؟</div>
        </div>
        <div>
          <button className="signupBtn">ورود </button>
        </div>
        <div className="hesab">
          حساب ندارید؟
          <Link to="sinupslayout/signup" className="hesablink">
            ثبت نام
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MasterLogin;
