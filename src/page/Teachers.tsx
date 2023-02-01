import React from 'react'
import { Box ,Typography} from "@mui/material";
import Teachers1 from '../Assets/Teachers/Teachers1.png';
import Teachers2 from '../Assets/Teachers/Teachers2.png';
import Teachers3 from '../Assets/Teachers/Teachers3.png';
import {Link} from 'react-router-dom'
const img = [
  {
    img: Teachers1,
    name:"طراحي"
  },
  {
    img: Teachers3,
    name:"چنگيز مرادي"
  },
  {
    img: Teachers2,
    name:"سكينه جعفري",
  },
  {
    img: Teachers1,
    name: "حشمت مشتاق"
  },

]



const Teachers = () => {
  const boxStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    color: "#EAF0FF",
    marginTop: "180px",
 
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
          اساتید برتر
        </Typography>
        <Typography>____________________________________________________________________________</Typography>

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
          بر اساس میزان فعالیت و بازید
        </Typography>
      </Box>

      <Box sx={{  display: "flex", alignItems: "center", justifyContent:"space-between", marginBottom:"50px", }}>
        {
          img.map((item) => {
            return (
              <Box sx={{margin:"20px"}}>
              <img src={item.img} alt="" className='teacherImg' />
              <div className="blurTeacher">
                <Link to="/" className="linkstyle">
                 {item.name}
                </Link>
              </div>
     </Box>
            )
          })
        }
       
</Box>



    </Box>
  )
}

export default Teachers
