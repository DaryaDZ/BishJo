import { Button, TextField, InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import "../index.css";
import Logo1 from "../Assets/local_library.png";
import icon from "../Assets/Bishjo.png";
import Name from "../Assets/Bishjo-Icon.png";
import search from "../Assets/search.png";
import { useState } from "react";

const Navbar = () => {
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
    '&:hover': {
      color: "#FDBE34",
   
    }
  };

  const [openInput, setOpenInput] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean>(true);

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
        <div style={{ backgroundColor: "#fff", borderRadius: "16px" }}>
          <Link to='/sinupslayout/signup' >
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
          <Link to='/loginslayout/login' >
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
        <div className="divNavbar">
         
          <img src={Logo1} alt=""  className="TadresIcon" />
          <Link
            to="/apply"
            className="LinkNavbar">
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
          <Button sx={MenuBtn}> کتابخانه</Button>
          <Button sx={MenuBtn}>وبلاگ</Button>
          <Link to='./category' >
          <Button sx={MenuBtn}>دوره ها </Button>
          </Link>
        </div>
        {/* Icon */}
        <div style={ChildDiv}>
          <img src={Name} alt="" style={{ marginRight: "8px" }} />
          <Link to='/' >
          <img src={icon} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
