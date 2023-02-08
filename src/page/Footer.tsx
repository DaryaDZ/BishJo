import React from "react";
import { Box, TextField, Typography,Button } from "@mui/material";
import LogogFooter from "../Assets/LogoFooter.png";
import about from "../Assets/about.png";

const Footer = () => {
  const footerBox = {
    width: "100%",
    backgroundColor: "#EAF0FF",
    height: "280px",
    marginTop: "580px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "100px",
  };
  const ChildBox = {
    width: "33.3%", 
    marginRight: "10px",
    flexDirection: "column"
  }
  return (
    <Box sx={footerBox}>
      <Box sx={ChildBox}>
        <Box>
        <Typography sx={{fontFamily:"Vazirmatn",fontSize:"23px",textAlign:"center",color:" #323232"}}>
          اطلاع از دوره هاي جديد 
        </Typography>
        </Box>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Button sx={{border:"none",width:"91px",height:"47px",borderRadius:"8px",fontFamily:"Vazirmatn",background:"#FDBE34",color:"#323232"}}>ارسال</Button>
          <TextField placeholder="ايميل" InputProps={{
            style: {
              width: "201px",
              height: "47px",
              borderRadius: "8px",
              margin: "10px",
            }
          }}></TextField>
        </Box>
      </Box>
      <Box
        sx={ChildBox}
      >
        skdhfshgsahgjf
      </Box>
      <Box sx={ChildBox}>
        <Box
          sx={{
            justifyContent: "right",
            display: "flex",
            alignItems: "center",
            marginTop:"50px"
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
          }}
        >
          <img src={about} alt="" className="about" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
