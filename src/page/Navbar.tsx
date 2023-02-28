import { Button, TextField, InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import "../index.css";
import Logo1 from "../Assets/local_library.png";
import icon from "../Assets/Bishjo.png";
import Name from "../Assets/Bishjo-Icon.png";
import search from "../Assets/search.png";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import notifications from "../Assets/notifications.png";
import img from "../Assets/img.jpg";
import {userLogOut} from '../features/Bishjo/UserSlice'



const Navbar = () => {
  const dispatch = useDispatch();
  const ChildDiv = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const MenuBtn = {
    color: "#EAF0FF",
    fontFamily: "Vazirmatn",
    fontWight: "400",
    fontSize: "16px",
    marginRight: "8px",
    backgroundColor: "#283148",
    "&:hover": {
      color: "#FDBE34",
    },
  };

  const [openInput, setOpenInput] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean>(true);

  const userInfo = useSelector((state: any) => state.users.currentUser);
  const [user, setuser] = useState(userInfo)
  useEffect(() => {
    if (userInfo !== null) {
      if (userInfo.length > 0) {
        userInfo.map((item: any) => {
          return setuser(item)
        })
      }
    }
    else {
      setuser(userInfo)
    }


    
  },[userInfo])




  return (
    <div
      style={{
        color: "white",
        margin: "50px 60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* login & sign Up  Left side*/}
      <div style={ChildDiv}>
        {!userInfo ? (
          <div style={{ backgroundColor: "#fff", borderRadius: "16px" }}>
            <Link to="/sinupslayout/signup">
              <Button
                style={{
                  borderRadius: "16px",
                  color: "#323232",
                  fontFamily: "Vazirmatn",
                  backgroundColor: "#FDBE34",
                  width: "80px",
                  height: "43px",
                }}
              >
                ثبت نام{" "}
              </Button>
            </Link>
            <Link to="/loginslayout/login">
              <Button
                sx={{
                  borderRadius: "16px",
                  fontFamily: "Vazirmatn",
                  color: "#323232",
                  backgroundColor: "#FFF",
                  width: "80px",
                  height: "43px",
                }}
              >
                ورود
              </Button>
            </Link>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
                justifyContent: "center",
                
            }}
            >
              {/* {
                userInfo.map((item:any) => 
                  item.image ?
                  <Link to='/userprofile'>
                  <Button sx={{ borderRadius: "50%" }}>
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
                      </Button>
                      </Link>

                    :
                   
                    <Button sx={{ borderRadius: "16px" }}>
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
                      </Button>
                ) 
              } */}



              
          {
                user.image ?
                <Link to='/userprofile'>
              <img
            src={require(`../Assets/${user.image}`)}
            alt=""
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              borderRadius: "50%",
              marginTop:"10px"
              
              
            }}
                    />
                    </Link>
              :
              <img
              src={img}
              alt=""
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "50%",
                marginTop:"10px"
               
              }}
            />
}
           
              {/* :
              
                  } */}
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#3C4865",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                  justifyContent: "center",
                marginLeft:"10px"
              }}
            >
              <Button sx={{}}>
                <img
                  src={notifications}
                  alt=""
                  style={{ width: "26px", height: "33px" }}
                />
              </Button>
              </div>
              <div    style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#3C4865",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft:"10px"
              }}>
              <Button sx={{fontFamily:"Vazirmatn",color:"#EAF0FF"}} onClick={()=>dispatch(userLogOut)}>
                خروج 
              </Button>
                </div>
          </div>
        )}
        <div className="divNavbar">
          <img src={Logo1} alt="" className="TadresIcon" />
          <Link to="/apply" className="LinkNavbar">
            درخواست تدریس
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div style={ChildDiv}>
        {/* Serch Bar */}
        <div style={ChildDiv}>
          {showBtn && (
            <Button
              onClick={() => {
                setOpenInput(!openInput);
                setShowBtn(!showBtn);
              }}
            >
              <img src={search} alt="" />
            </Button>
          )}
          {openInput && (
            <TextField
              style={{
                width: openInput ? "450px" : "",
                transition: "width 2s ease-in",
                backgroundColor: "#3C4865",
                borderRadius: "16px",
                border: "none",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Button
                      onClick={() => {
                        setOpenInput(!openInput);
                        setShowBtn(!showBtn);
                      }}
                    >
                      <img src={search} alt="" />
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          )}
        </div>

        {/* Menu */}
        <div style={ChildDiv}>
          <Link to="/bookstore" >
          <Button sx={MenuBtn}> کتابخانه</Button>
          </Link>
          <Link to="/blogs" >
            <Button sx={MenuBtn}>وبلاگ</Button>
            </Link>
          <Link to='/category' >
          <Button sx={MenuBtn}>دوره ها </Button>
          </Link>
        </div>
        {/* Icon */}
        <div style={ChildDiv}>
          <img src={Name} alt="" style={{ marginRight: "8px" }} />
          <Link to="/">
            <img src={icon} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
