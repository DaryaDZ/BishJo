import React from "react";
import BrandIcon from "../Assets/Brand Icon.png";
import notifications from "../Assets/notifications.png";
import img from "../Assets/img.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Typography, TextField } from "@mui/material";

const MasterProfile = () => {
  const boxStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "space-between",
    justifyContent: "center",
    color: "#EAF0FF",
    marginTop: "15px",
    padding: "60px",
  };
  const NavBarStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "50px",
    // marginRight: "50px",
  };
  const ChildBox = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      <Box sx={NavBarStyle}>
        <Box sx={ChildBox}>
          {/* <img src={ } alt="" /> */}
          <img src={img} alt="" style={{
               width: "50px",
               height: "50px",
               objectFit: "cover",
               borderRadius: "50%",
          }} />
           <img src={notifications} alt="" style={{ width: "26px", height: "33px",marginLeft:"20px" }} />
        </Box>
        <Box sx={ChildBox}>
          <img src={BrandIcon} alt="" />
        </Box>
      </Box>
      <Box sx={boxStyle}>
        <Box sx={{backgroundColor:"blue",flex:"3",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}></Box>
        <Box sx={{backgroundColor:"red",flex:"1"}}>dsfkajsgklsfj</Box>
      </Box>
    </>
  );
};

export default MasterProfile;
