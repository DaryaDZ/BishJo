import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
 
} from "@mui/material";
import LogogFooter from "../Assets/LogoFooter.png";
import about from "../Assets/about.png";
import LinkdIn from "../Assets/social Media/LinkdIn.png";
import Insta from "../Assets/social Media/insta.png";
import telegram from "../Assets/social Media/telegram.png";
import twitter from "../Assets/social Media/twitter.png";
import { Link } from "react-router-dom";




const Footer = () => {
  const footerBox = {
    width: "100%",
    backgroundColor: "#EAF0FF",
    height: "280px",
    marginTop: "190px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "100px",
  };
  const ChildBox = {
    width: "33.3%",
    marginRight: "10px",
    flexDirection: "column",
  };
  return (
    <Box sx={footerBox}>
      <Box sx={ChildBox}>
        <Box sx={{ width: "100%", height: "50px" }}>
          <Typography
            sx={{
              fontFamily: "Vazirmatn",
              fontSize: "23px",
              textAlign: "center",
              color: " #323232",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            اطلاع از دوره هاي جديد
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",

            height: "60px",
          }}
        >
          <Button
            sx={{
              border: "none",
              width: "91px",
              height: "47px",
              borderRadius: "8px",
              fontFamily: "Vazirmatn",
              background: "#FDBE34",
              color: "#323232",
            }}
          >
            ارسال
          </Button>
          <TextField
            placeholder="ايميل"
            InputProps={{
              style: {
                width: "201px",
                height: "47px",
                borderRadius: "8px",
                margin: "10px",
                textAlign: "center",
                direction: "rtl",
              },
            }}
          ></TextField>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",

            height: "60px",
          }}
        >
          <img src={LinkdIn} alt="" className="footerImg" />
          <img src={Insta} alt="" className="footerImg" />

          <img src={telegram} alt="" className="footerImg" />
          <img src={twitter} alt="" />
        </Box>
      </Box>
      <Box sx={ChildBox}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "60px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Vazirmatn",
              fontWight: "400",
              fontSize: "23px",
              color: "#323232",
              marginBottom: "15px",
              marginLeft:"55px"
            }}
          >
            دسترسی سریع
          </Typography>
        </Box>
        <Box sx={{ width: "100%", height: "104px" }}>
          <ul>
            <Link to='/' style={{textDecoration:"none"}}><li>صفحه اصلی</li></Link>
            <Link to='/questions' style={{textDecoration:"none"}}><li>سوالات پرتکرار</li></Link>
            <Link to='/support' style={{textDecoration:"none"}}><li>ارتباط با پشتیبانی</li></Link>
          </ul>
        </Box>
      </Box>
      <Box sx={ChildBox}>
        <Box
          sx={{
            justifyContent: "right",
            display: "flex",
            alignItems: "center",
            // marginTop: "50px",
            width: "100%",

            height: "50px",
          }}
        >
          <img src={LogogFooter} alt="" />
          <label className="labelFooter">درباره </label>
        </Box>

        <Box
          sx={{
            justifyContent: "right",
            display: "flex",
            alignItems: "center",
            width: "100%",

            height: "120px",
          }}
        >
          <img src={about} alt="" className="about" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
