import React from "react";
import {
  Box,
  Table,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";
import picture1 from "../Assets/Pictures1.png";
import picture2 from "../Assets/Pictures2.png";
import picture3 from "../Assets/Pictures3.png";
import picture4 from "../Assets/Pictures4.png";
import Profession1 from "../Assets/Profession1.png";
import Profession2 from "../Assets/Profession2.png";
import Profession3 from "../Assets/Profession3.png";
import Profession4 from "../Assets/Profession4.png";
import Line from "../Assets/Line.png";
import { Link } from "react-router-dom";

const Courses = () => {
  const boxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#EAF0FF",
    margin: "50px 90px",
  };
  const tableCell = {
    border: "none",
  };


  return (
    <>
      <Box sx={{ marginTop: "180px" }}>
        <Typography
          sx={{
            fontFamily: "Vazirmatn",
            color: "#EAF0FF",
            textAlign: "center",
            position: "absolute",
            marginLeft: "600px",
            backgroundColor: "#283148",
          }}
          variant="h4"
        >
          دوره های ما
        </Typography>
        <img src={Line} alt="" style={{ width: "100%" }} />
      </Box>
      <Box sx={boxStyle}>
        <Table sx={{ minWidth: 600 }}>
          <TableRow>
            <TableCell sx={tableCell}>
              <img src={picture1} alt="" className="courseImg" />

              <div className="blurTopRow">
                <Link to="/" className="linkstyle">
                  طراحی
                </Link>
              </div>
            </TableCell>
            <TableCell sx={tableCell}>
              <img src={picture2} alt="" className="courseImg" />
              <div className="blurTopRow">
                <Link to="/" className="linkstyle">
                  عکاسی
                </Link>
              </div>
            </TableCell>
            <TableCell sx={tableCell}>
              <img src={picture3} alt="" className="courseImg" />
              <div className="blurTopRow">
                <Link to="/" className="linkstyle">
                  تدوین
                </Link>
              </div>
            </TableCell>
            <TableCell sx={tableCell}>
              <img src={picture4} alt="" className="courseImg" />
              <div className="blurTopRow">
                <Link to="/" className="linkstyle">
                  طراحی سه بعدی
                </Link>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={tableCell}>
              <img src={Profession1} alt="" className="courseImg" />
              <div className="blur">
                <Link to="/" className="linkstyle">
                  بازی سازی
                </Link>
              </div>
            </TableCell>
            <TableCell sx={tableCell}>
              <img src={Profession2} alt="" className="courseImg" />
              <div className="blur">
                <Link to="/" className="linkstyle">
                  کدنویسی
                </Link>
              </div>
            </TableCell>
            <TableCell sx={tableCell}>
              <img src={Profession3} alt="" className="courseImg" />
              <div className="blur">
                <Link to="/" className="linkstyle">
                  طراحی رابط کاربری
                </Link>
              </div>
            </TableCell>
            <TableCell sx={tableCell}>
              <img src={Profession4} alt="" className="courseImg" />
              <div className="blur">
                <Link to="/" className="linkstyle">
                  نویسندگی
                </Link>
              </div>
            </TableCell>
          </TableRow>
        </Table>
      </Box>
    </>
  );
};

export default Courses;
