import React,{useState,useEffect} from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import BrandIcon from "../Assets/Brand Icon.png";

import notifications from "../Assets/notifications.png";
import img from "../Assets/img.jpg";
import { useDispatch ,useSelector} from "react-redux";
import {editUser} from '../features/Bishjo/UserSlice'
import {Link, useNavigate} from 'react-router-dom';

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Password, setPassword] = useState<string>();
  const [Username, setUsername] = useState<string>();
  const [Email, setEmail] = useState<string>();
  const boxStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "space-between",
    justifyContent: "center",
    color: "#EAF0FF",
    marginTop: "15px",
    padding: "60px",
  };
  const TypoGraphi = {
    fontFamily: "Vazirmatn",
    fontWeight: "400",
    fontSize: "15px",
    textAlign: "right",
    width: "100%",
    marginTop: "15px",
  };
  
  const userInfo = useSelector((state: any) => state.users.currentUser);
  const [user, setuser] = useState(userInfo)
  useEffect(() => {
    if (userInfo.length > 0) {
      userInfo.map((item: any) => {
        return setuser(item)
      })
    }
    else {
      setuser(userInfo)
  }
    
    
  },[userInfo])
  console.log(user)
  const submitChange = () => {
    dispatch(editUser({ username: Username, password: Password, email: Email, user }));
    navigate('/userprofile')
  }
  const userEdit = () => {
    dispatch(editUser({ username: Username, password: Password, email: Email, user }));
    navigate('/')
  }
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "50px",
          marginRight: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* {userInfo.map((item: any) =>
            item.image ? (
              <img
                src={require(`../Assets/${item.image}`)}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            ) : (
              <img
                src={img}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            )
          )} */}

          {
            user.image ?
              <img
            src={require(`../Assets/${user.image}`)}
            alt=""
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              borderRadius: "50%",
              
            }}
            />
              :
              <img
              src={img}
              alt=""
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "50%",
               
              }}
            />
}

          <Button sx={{}}>
            <img
              src={notifications}
              alt=""
              style={{ width: "26px", height: "33px", }}
            />
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to='/'>
          <img src={BrandIcon} alt="" />
          </Link>
        </Box>
      </Box>
      <Box sx={boxStyle}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginRight: "100px",
            backgroundColor: "#313B52",
            borderRadius: "16px",
            width: "50%",
            padding: "40px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  fontFamily: "Vazirmatn",
                  border: "2px solid #FDBE34",
                  marginBottom: "20px",
                  color: "#EAF0FF",
                }}
                onClick={submitChange}
              >
                اعمال تغییرات
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  textAlign: "right",
                  fontFamily: "Vazirmatn",
                  fontSize: "24px",
                  marginBottom: "20px",
                }}
              >
                حساب
              </Typography>
            </Box>
          </Box>
          <hr style={{ width: "100%", direction: "rtl" }} />
          <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <label
              style={{
                marginTop: "20px",
                textAlign: "right",
                marginBottom: "10px",
              }}
            >
              ایمیل{" "}
            </label>
            <TextField
              type="email"
              sx={{ backgroundColor: "#4E5D7D", borderRadius: "16px" }}
              // value={Email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <label
              style={{
                marginTop: "20px",
                textAlign: "right",
                marginBottom: "10px",
              }}
            >
              نام کاربری
            </label>
            <TextField
              sx={{ backgroundColor: "#4E5D7D", borderRadius: "16px" }}
              // value={Username}
              onChange={(e)=>setUsername(e.target.value)}
            />
            <label
              style={{
                marginTop: "20px",
                textAlign: "right",
                marginBottom: "10px",
              }}
            >
              {" "}
              رمز عبور 
            </label>
            <TextField
              sx={{ backgroundColor: "#4E5D7D", borderRadius: "16px" }}
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <Box sx={{ direction: "rtl" }}>
              <Button
                sx={{
                  backgroundColor: "#FDBE34",
                  width: "86px",
                  marginTop: "20px",
                  fontFamily: "Vazirmatn",
                  color: "#323232",
                  '&:hover': {
                    backgroundColor: "#FDBE34",
                  }
                }}
                onClick={userEdit}
              >
                ثبت
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "25%",
            flexDirection: "column",
            marginBottom: "220px",
          }}
        >
          <Box sx={{ width: "100%", padding: "10px" }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Vazirmatn",
                textAlign: "right",
                marginBottom: "30px",
              }}
            >
              تنظیمات
            </Typography>
          </Box>
          <hr style={{ width: "100%", direction: "rtl" }} />
          <Box sx={{ width: "100%", padding: "10px" }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Vazirmatn",
                textAlign: "right",
                width: "100%",
                marginTop: "10px",
              }}
            >
              حساب
            </Typography>
            {
              // userInfo.map((item: any) => {
              //   return <>
                
              //   </>
              // })
              

            }
            <Typography sx={TypoGraphi}>{user.email}   :ایمیل </Typography>
              <Typography sx={TypoGraphi}> {user.username}   :نام کاربری </Typography>
              <Typography sx={TypoGraphi}> {user.password}   :رمز عبور </Typography>
              <Typography sx={TypoGraphi}> اشتراک شما   :{user.eshterak} روز </Typography>
            </Box>
              
        </Box>
      </Box>
    </Box>
  );
};

export default UserProfile;
