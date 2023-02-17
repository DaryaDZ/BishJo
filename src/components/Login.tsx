import React, { useState } from "react";
import "./Login.css";
import { TextField, InputAdornment } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/Bishjo/UserSlice";

function Login() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [phoneOremailOrusername, setphoneOremailOrusername] =
    useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    dispatch(
      loginUser({
        username: phoneOremailOrusername,
        email: phoneOremailOrusername,
        phone:phoneOremailOrusername,
        password: Password
      })
    );
    navigate('/')
  };

  return (
    <div>
      <div className="loginsContainer">
        <div className="inputsContainer">
          <label className="text">نام کاربری یا ایمیل یا شماره تلفن</label>
          <TextField
            placeholder="  شماره تلفن یا نام کاربری خود را وارد کنید "
            type="text"
            sx={{
              // width: openInput ? "450px" : "",
              width: "334px",
              // height: "60px",
              // textAlign: "right",
              transition: "width 2s ease-in",
              // backgroundColor: "#3C4865",
              borderRadius: "12px",
              border: "10px solid #313b52",
              backgroundColor: "#eaf0ff",
              justifyContent: "right",
              color: "#1C1B1F",
              direction: "rtl",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {/* <Button
                    sx={{
                      backgroundColor: "#fdbe34",
                      color: "#323232",
                      

                    }}
                    >
                      دریافت کد
                    </Button> */}
                </InputAdornment>
              ),

              style: {
                height: "50px",
              },
            }}
            onChange={(e) => setphoneOremailOrusername(e.target.value)}
          />
        </div>
        <div>
          <label className="text">رمز عبور</label>
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
              justifyContent: "right",
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
            onChange={(e) => setPassword(e.target.value)}
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
          <button className="signupBtn" onClick={login}>
            ورود{" "}
          </button>
        </div>
        <div className="hesab">
          حساب ندارید؟
          <Link to="/sinupslayout/signup" className="hesablink">
            ثبت نام
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
