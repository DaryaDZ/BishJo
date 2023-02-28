import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import BlogHero from "../Assets/BlogHero.png";
import { ShowAllBlogs } from "../features/Bishjo/BlogSlice";
import ClockIcon from "../Assets/Clock Icon.png";
import { useSelector } from "react-redux";
import searchICON from "../Assets/searchICON.png";
import star from "../Assets/star.png";
import favorite from "../Assets/favorite.png";
import sell from "../Assets/sell.png";
import CTAIcon from '../Assets/CTA Icon.png'
import { Link } from "react-router-dom";




const Blogs = () => {
  const boxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#EAF0FF",
    padding: "60px",
  };
  const allBlogs: any = useSelector<any>(ShowAllBlogs);
  console.log(allBlogs);
  const MoreView = allBlogs.payload.blogs.Blogs.filter(
    (item: any) => item.rate === "5"
  );
  return (
    <>
      <Box sx={boxStyle}>
        <Box sx={{ display: "flex", flex: "3" }}>
          <img alt="" src={BlogHero} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: "1",
            backgroundColor: "#313B52",
            height: "350px",
            padding: "50px",
            flexDirection: "column",
            direction: "rtl",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Vazirmatn",
              fontWeight: "400px",
              fontSize: "20px",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            پر بازدید های این ماه
          </Typography>
          <hr style={{ width: "100%" }} />
          {MoreView.map((item: any) => {
            return (
              <>
                <Link to="/">
                  
                <Typography
                  sx={{
                    fontFamily: "Vazirmatn",
                    fontWeight: "200px",
                    fontSize: "15px",
                    marginBottom: "8px",
                    marginTop: "10px",
                  }}
                  >
                  {item.title}
                </Typography>
                  </Link>
                <Typography
                  sx={{
                    fontFamily: "Vazirmatn",
                    fontSize: "10px",
                    marginBottom: "8px",
                    color: "#ADB1BA",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src={ClockIcon} alt="" style={{ marginLeft: "2px" }} />
                  زمان مورد نیاز برای مطالعه : 8 دقیقه
                </Typography>
                <hr style={{ width: "100%" }} />
              </>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#EAF0FF",
          width: "100%",
          padding: "0px 60px",
          justifyContent: "center",
          marginBottom: "80px",
          // backgroundColor:"red"
        }}
      >
        <TextField
          placeholder="عنوان کتاب را وارد کنید"
          style={{
            width: "600px",
            transition: "width 2s ease-in",
            backgroundColor: "#EAF0FF",
            borderRadius: "16px",
            border: "none",
            justifyContent: "space-between",
            direction: "rtl",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button>
                  <img src={searchICON} alt="" />
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#EAF0FF",
          width: "100%",
          padding: "0px 60px",
          justifyContent: "space-between",
          flexDirection: "column",
          // backgroundColor:"red"
        }}
      >
        {allBlogs.payload.blogs.Blogs.map((item: any) => {
          return (
            <>
              <Box
                sx={{
                  width: "100%",
                  direction: "rtl",
                  padding: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  
                }}
              >
                <Box>
                <img
                  alt=""
                  src={require(`../Assets/Blogs/${item.img}`)}
                  style={{ width: "230px", height: "300px" }}
                  />
                </Box>
                
                <Box sx={{ display: "flex", flexDirection: "column"}}>

                  <Box sx={{display:"flex", justifyContent: "center", alignItems: "center",width:"100%"}}> 
                  <Box sx={{ display: "flex",width:"50%"}}>
                  <Typography
                    sx={{
                      fontFamily: "Vazirmatn",
                      fontWeight: "400px",
                      fontSize: "20px",
                      marginBottom: "8px",
                      textAlign: "center",
                      marginRight: "20px",
                    }}
                    >
                    {item.title}
                  </Typography>
                  </Box>
                <Box sx={{ display: "flex",width:"50%",direction:"ltr"}}>
                  <img
                    style={{ height: "10px", width: "10px", margin: "5px" }}
                    src={favorite}
                    alt=""
                    />
                  <Typography>{item.rate}</Typography>
                  <img
                    style={{ height: "10px", width: "10px", margin: "5px" }}
                    
                    src={star}
                    alt=""
                    />
                </Box>
               </Box>
                  <Box sx={{display:"flex", justifyContent: "center", alignItems: "center",width:"100%",}}>
                  <Typography sx={{fontFamily:"Vazirmatn",textAlign:"justify",marginRight:"20px",marginBottom:"150px"}}>
                  {item.content.substring(1,350)}
                  </Typography>
                  
                  </Box>
                  <Box sx={{ display: "flex",  alignItems: "center", width: "100%" }}>
                    <img src={sell} style={{ width: "15px", height: "15px",marginLeft:"5px" ,marginRight:"20px"}} alt="" />
                  {item.tag}
                    <img src={ClockIcon} alt="" style={{ marginLeft: "2px", marginRight: "60px" }} /> 8 دقیقه
                    <Link to={`/singleblog/${item.id}`}>
                    <Box sx={{marginRight: "590px",display:"flex",alignItems:"center",justifyContent:"center" }}>
                    مطالعه <img src={CTAIcon} alt="" style={{ marginRight: "5px"}} />

                    </Box>
                    </Link>
                  </Box>
             
                </Box>
              </Box>
             
              <hr style={{ width: "100%" }} />
            </>
          );
        })}
      </Box>
    </>
  );
};

export default Blogs;
