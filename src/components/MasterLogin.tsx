import React from "react";
import "./Login.css";
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
          <input
            className="input"
            placeholder=" ...نام کاربری یا ایمیل یا تلفن خود را وارد کنید "
          />
        </div>
        <div>
          <label className="text">رمز عبور</label>
          <input
            type="password"
            className="input"
            placeholder=" ...رمز عبور خود را وارد کنید "
          />
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
