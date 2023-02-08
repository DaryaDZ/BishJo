import React from 'react'
import { Box, Typography, Table, TableRow, TableCell, Button } from '@mui/material';
import آموزش from '../Assets/آموزش.png';
import دوره from '../Assets/دوره.png';
import کاربر from '../Assets/کاربر.png';
import مقاله from '../Assets/مقاله.png';
import person from '../Assets/person.png';
import school from '../Assets/school.png';
import librarybooks from '../Assets/library_books.png';
import img from '../Assets/young-business-man-talking-phone-working-computer1.png';

const Introduction = () => {
  const boxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#EAF0FF",
    margin: "50px 90px",
  };
  const textStyle = {
    fontFamily: "Vazirmatn",
    fontWeight: "500",
    textAlign: "right",
  };
  const tableCell = {
    border: "none",
  };


  return (
    <Box sx={boxStyle}>
    {/* left  */}
    <Box sx={{ width: "50%", display:"flex",alignItems:"center",justifyContent:"center" }}>
      
<img src={img} alt=""/>

    </Box>
    {/* right */}
    <Box sx={{ width: "50%" }}>
      <Typography sx={textStyle} fontSize="25px">
        آموزش حرفه مورد علاقت با بیشجو
      </Typography>
      <Typography
        sx={textStyle}
        fontSize="17px"
        marginTop="15px"
        fontStyle="normal"
      >
        بیشجو ، بستر آموزش آنلاین حرفه های مورد علاقه شما ، با نیم قرن سابقه و
        عقبه. مسیر درآمدزایی خود را بسازید
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
          marginLeft: "70px",
          // backgroundColor: "red",
        }}
      >
        {/* amar */}
        <Table sx={{ minWidth: 610 }}>
          <TableRow>
            <TableCell sx={tableCell} align="center">
              <img src={librarybooks} alt="" />
              <TableRow
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <img src={مقاله} alt="" />
              </TableRow>
            </TableCell>
            <TableCell sx={tableCell} align="center">
              <img src={person} alt="" />
              <TableRow
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <img src={کاربر} alt="" />
              </TableRow>
            </TableCell>
            <TableCell sx={tableCell} align="center">
              <img src={school} alt="" />
              <TableRow
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <img src={دوره} alt="" />
              </TableRow>
            </TableCell>
            <TableCell sx={tableCell} align="center">
              <img src={school} alt="" />
              <TableRow
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  
                }}
              >
                <img src={آموزش} alt="" />
              </TableRow>
            </TableCell>
          </TableRow>
        </Table>
      </Box>
      {/* button */}
      <Box
        sx={{
          backgroundColor: "",
          
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
          marginTop:"20px"
        }}
      >
        <Button
          sx={{
            border: "3px solid #FDBE34",
            width: "200px",
            height: "47px",
            marginRight: "20px",
            fontFamily: "Vazirmatn",
            color: "#FDBE34",
          }}
        >
          شرایط و قوانین تدریس
        </Button>
        <Button
          sx={{
            backgroundColor: "#FDBE34",
            fontFamily: "Vazirmatn",
            width: "150px",
            height: "47px",
              color: "#323232",
              '&:hover': {
                backgroundColor: "#FDBE34",
            }
          }}
        >
          خرید اشتراک
        </Button>
      </Box>
    </Box>
  </Box>
  )
}

export default Introduction
