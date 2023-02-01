import React from "react";
import { Box, Button, Typography } from "@mui/material";
import groups from "../Assets/WhyIcon/groups.png";
import forum from "../Assets/WhyIcon/forum.png";
import folder_open from "../Assets/WhyIcon/folder_open.png";
import account_balance_wallet from "../Assets/WhyIcon/account_balance_wallet.png";
import img from '../Assets/img.png'
const Why = () => {
  const boxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#EAF0FF",
    // marginTop: "180px",
    marginTop: "180px",
  };
  const text = {
    fontFamily: "Vazirmant",
    fontWeight: "400",
    fontSize: "28px",
    color: "#EAF0FF",
    textAlign: "right",
    lineHeight: "120%",
    margin: "20px",
    
  };
  const IconText = {
    textAlign: "right",
    marginRight: "20px",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "120%",
  }
  const DivIcon = {
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    margin:"15px 20px"
  }
  return (
    <Box sx={boxStyle}>
      <Box
        sx={{
          width: "50%",
          
          display: "flex",
          alignItems: "right",
          justifyContent: "right",
          flexDirection: "column",
          // backgroundColor: "red",
          marginRight:"100px"
         
        }}
      >
        <Typography sx={text}>چرا بيشجو را انتخاب كنيم ؟</Typography>
        <Box sx={DivIcon}>
          <Typography sx={IconText}>هفت روز رايگان در اولين اشتراك شما</Typography>
          <img src={account_balance_wallet} alt="" className="Icon" />
        </Box>
        <Box sx={DivIcon}>
          <Typography sx={IconText}>ارتباط مستقيم با استاد </Typography>
          <img src={forum} alt=""  />
        </Box >
        <Box sx={DivIcon}>
          <Typography sx={IconText}>ارائه فايل هاي تمرين از طرف استاد</Typography>
          <img src={folder_open} alt="" />
        </Box>
        <Box sx={DivIcon}>
          <Typography sx={IconText}>تنوع اساتيد در هر حرفه </Typography>
          <img src={groups} alt="" />
        </Box>
        <Box  sx={DivIcon}>
          <Button  sx={{
            border: "3px solid #FDBE34",
            width: "150px",
            height: "47px",
            marginRight: "20px",
            fontFamily: "Vazirmatn",
            color: "#FDBE34",
            marginTop:"50px"
          }}> ورود </Button>
          <Button  sx={{
            backgroundColor: "#FDBE34",
            fontFamily: "Vazirmatn",
            width: "150px",
            height: "47px",
            color: "#323232",
            marginTop:"50px"
          }}>ثبت نام </Button>
</Box>
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <div className="circle"> */}
          <img src={img} alt="" className="circleIMG"/>
        {/* </div> */}
      </Box>
    </Box>
  );
};

export default Why;
