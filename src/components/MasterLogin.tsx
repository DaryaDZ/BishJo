import React,{useState} from "react";
import "./Login.css";
import { Button, TextField, InputAdornment } from "@mui/material";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EdgesensorHighIcon from '@mui/icons-material/EdgesensorHigh';
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {loginMaster} from '../features/Bishjo/MasterSlice'

// interface TimerState{
//   time: number,
//   seconds: number,
//   minuts:number,
// }


function MasterLogin() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [phoneOremailOrusername, setphoneOremailOrusername] = useState<string>("");
  const [tempPasword, setTempPassword] = useState<string>("")
  const dispatch = useDispatch();
//   const [Timer, setTimer] = useState<TimerState>({
//     time:60,
//     seconds: time -Math.floor((time-1)/60)*60-1,
//     minuts:Math.floor((time-1)/60),
// })
//   const TimerFunction = () => {

// }
  // let  counter:number = 0.2;

  const MasterLogin = () => {
    
    if (phoneOremailOrusername === "" || tempPasword == "") {
      alert("شماره تلفن و یارمز عبور را وارد کنید")
      // console.log( "phoneNumber"+`${ phoneOremailOrusername}`)
    }
    else {
     dispatch(
      loginMaster(phoneOremailOrusername))
    }
    
  }



  return (
    <div>
      <div className="loginsContainer">
        <div className="inputsContainer">
          <label className="text"> شماره تلفن</label>
          <TextField
               placeholder=" ... شماره تلفن یا نام کاربری خود را وارد کنید "
               type="text"
              sx={{
                width: "334px",
                textAlign: "right",
                transition: "width 2s ease-in",
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
                      fontFamily:"Vazirmatn"
                    }}
                    >
                      دریافت کد
                    </Button>
                    {/* {`${Timer.minuts}:${Timer.seconds <= 10 ?`0${Timer.seconds}`:Timer.seconds}`} */}
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <EdgesensorHighIcon />
                  </InputAdornment>
                ),
                style:{
                  height:"50px"
                }
            }}
            value={phoneOremailOrusername}
            onChange={(e)=>setphoneOremailOrusername(e.target.value)}
            />
        </div>
        <div>
          <label className="text">کد یکبار مصرف </label>
          <TextField
               placeholder="کد یکبار مصرف ارسال شده را وارد کنید..."
               type="password"
              sx={{
                width: "334px",
                textAlign: "right",
                transition: "width 2s ease-in",
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
            value={tempPasword}
            onChange={(e)=>setTempPassword(e.target.value)}
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
          <button className="signupBtn" onClick={MasterLogin}>ورود </button>
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

export default MasterLogin;
