import React from "react";
import { Box, Typography, Table, TableRow, TableCell } from "@mui/material";
import { Link } from "react-router-dom";
import AdobePs from '../Assets/Application/Adobeps.png';
import AdobePr from '../Assets/Application/AdobePr.png';
import AdobeAE from '../Assets/Application/Adobe AE.png';
import AdobeAI from '../Assets/Application/Adobe AI.png';
import AdobeXD from '../Assets/Application/Adobe Xd.png';
import Blender from '../Assets/Application/Blender.png';
import Figma from '../Assets/Application/Figma.png';
import UnrealEngine from '../Assets/Application/UnrealEngine.png';








const Software = () => {
  const boxStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    color: "#EAF0FF",
    marginTop: "180px",
    backgroundColor: "#171E2D",
  };

  const IconCell = {
    backgroundColor: "#3C4865",
    width: "220px",
    height: "180px",
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

  };
  const tableCell = {
    border: "none",
  };

  return (
    <Box sx={boxStyle}>
      <Box sx={{marginTop:"50px",marginBottom:"30px"}}>
        <Typography
          sx={{
            fontFamily: "Vazirmatn",
            fontWeight: "500px",
            fontSize: "32px",
            textAlign: "center",
          }}
        >
          نرم افزار های مجبوب در بازار
        </Typography>
        <Typography
          sx={{
            fontFamily: "Vazirmatn",
            fontWeight: "200px",
            fontSize: "22px",
            textAlign: "center",
            fontStyle: "normal",
            marginTop: "10px",
          }}
        >
          !!با تخصص این نرم افزار ها بی کار نمیمونیا
        </Typography>
      </Box>

      <Box>
        <Table sx={{ minWidth: 1170 }}>
          <TableRow>
            <TableCell sx={tableCell}>
              <Box sx={IconCell}>
                <img src={AdobeAE} alt="" className="softwareIcon" />
                <div className="blurSoftwarename">
                <Link to="/" className="linkstyleSoftware">
                After Effect
                  </Link>
                  </div>
              </Box>
            </TableCell>
            <TableCell sx={tableCell}>
              <Box sx={IconCell}>
                <img src={AdobeAI} alt="" className="softwareIcon" />
                <div className="blurSoftwarename">
                <Link to="/" className="linkstyleSoftware">
                    Illustrator
                  </Link>
                  </div>
                
              </Box>
            </TableCell>
            <TableCell sx={tableCell}>
              <Box sx={IconCell}>  <img src={AdobePr} alt="" className="softwareIcon" />
              <div className="blurSoftwarename">
                <Link to="/" className="linkstyleSoftware">
                Premiere Pro
                  </Link>
                  </div>
                
              </Box>
            </TableCell>
            <TableCell sx={tableCell}>
              <Box sx={IconCell}>
                <img src={AdobePs} alt="" className="softwareIcon" />
                <div className="blurSoftwarename">
                <Link to="/" className="linkstyleSoftware">
                    Photoshop
                  </Link>
                  
                  </div>
              </Box>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Box sx={IconCell}><img src={AdobeXD} alt="" className="softwareIcon" />
              <div className="blurSoftwareName">
                <Link to="/" className="linkstyleSoftware">
                AdobeXD
                  </Link>
                  
                  </div>
              </Box>
            </TableCell>
            <TableCell>
              <Box sx={IconCell}>
              <img src={Blender} alt="" className="softwareIcon"/>
              <div className="blurSoftwareName">
                <Link to="/" className="linkstyleSoftware">
                    Blender
                  </Link>
                </div>
              </Box>
            </TableCell>
            <TableCell>
              <Box sx={IconCell}>
              <img src={Figma} alt="" className="softwareIcon"/>
              <div className="blurSoftwareName">
                <Link to="/" className="linkstyleSoftware">
                Figma
                  </Link>
                </div>
              </Box>
            </TableCell>
            <TableCell>
              <Box sx={IconCell}>
              <img src={UnrealEngine} alt="" className="softwareIcon"/>
              <div className="blurSoftwareName">
                <Link to="/" className="linkstyleSoftware">
                Unreal Engine
                  </Link>
                </div>
              
              </Box>
            </TableCell>
          </TableRow>
        </Table>
      </Box>
    </Box>
  );
};

export default Software;
