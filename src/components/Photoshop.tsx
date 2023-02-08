import React, { useState } from "react";
import AdobePs from "../Assets/Application/Adobeps.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Button, Collapse, Typography, Zoom } from "@mui/material";
// import { ZoomOut } from "@mui/icons-material";

const Photoshop = () => {
  const boxStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    color: "#EAF0FF",
    // marginTop: "180px",
  };

  const str =
    "نرم افزاری گرافیکی جهت ایجاد ، ترکیب ، ویرایش ، بازسازی و یا دگرگونی عکس‌ها و نگاره‌ها بکار می‌رود. فتوشاپ برای سیستم‌عامل ویندوز و مکینتاش به‌کار می‌رود. هم‌چنین نگارش‌های گوناگون این نرم‌افزار تا نگارش دهم، در سیستم‌عامل لینوکس نیز با کمک ابزارهای میانه (مانند کراس‌اوور) قابل استفاده‌است. آخرین نسخهٔ رسمی این نرم‌افزار نسخهٔ نوزدهم آن است که با اسم ادوبی فتوشاپ سی‌ سی شناخته می‌شود. (سی‌اس مخفف عبارت Creative Suite است و به معنای برنامهٔ خلاق است.) اگرچه در ابتدا فتوشاپ برای ویرایش عکس‌ها جهت چاپ روی کاغذ طراحی شده بود، اما به خاطر تنوع ابزارهایی که در اختیار کاربر می‌گذارد، از Adobe Photoshop به طور فزاینده‌ای برای تولید و ویرایش عکس‌ها در فرمت‌های دیجیتال (به خصوص برای استفاده در وب) استفاده می‌شود. از دید گرافیکی نرم‌افزار فتوشاپ توانایی کار با چندین نمونه رنگی را دارد، که عبارت‌اند از نمونه‌های رنگی RGB، LIB، CMYK، سیاه و سفید و غیره.";
  const [resizebox, setResizeBox] = useState<boolean>(false);
  return (
    <Box sx={boxStyle}>
      {/* About the software */}

      {!resizebox ? (
        <Box
          sx={{
            backgroundColor: "#3C4865",
            width: "91%",
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
            padding: "20px",
            borderRadius: "16px",
          }}
        >
          <Box
            sx={{
              marginRight: "20px",
              width: "70%",
              direction: "rtl",
              height: resizebox ? "700px" : "",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontFamily: "Vazirmatn", textAlign: "right" }}
            >
              فتوشاپ/Photoshop
            </Typography>
            <Typography
              sx={{
                fontFamily: "Vazirmatn",
                textAlign: "right",
                marginTop: "8px",
              }}
            >
              Adobe Photoshop
            </Typography>
            <Typography
              sx={{
                fontFamily: "Vazirmatn",
                textAlign: "justify",
                marginTop: "8px",
                textJustify: "inter-word",
              }}
            >
              {str.substring(0, 240) + "..."}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "8px",
              
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#1F2533",
                  color: "#EAF0FF",
                  fontFamily: "Vazirmatn",
                  "&:hover": {
                    backgroundColor: "#1F2533",
                  },
                }}
                onClick={() => setResizeBox(!resizebox)}
              >
              بیشتر
               
                  <KeyboardArrowDownIcon />
               
              </Button>
            </Box>
          </Box>
           {/* <Zoom in={resizebox} timeout={1000}> */}
          <Box
            sx={{
              backgroundColor: "#1F2533",
              width: "320px",
              height: "170px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={AdobePs} alt="" />
            </Box>
            {/* </Zoom> */}
        </Box>
      ) : (
        <Collapse in={resizebox}>
            <Box sx={{
              backgroundColor: "#3C4865",
          width: "91%",
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
          flexDirection: "column",
          padding: "20px",
              borderRadius: "16px",
              marginLeft:"60px"
            }}>
              
     
           <Zoom in={resizebox} timeout={1000}>
            <Box
            sx={{

              width: "100%",
              direction: "rtl",
                height: resizebox ? "400px" : "",
            }}
            >
              <Box
            sx={{
              backgroundColor: "#1F2533",
              width: "100%",
              height: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={AdobePs} alt=""  style={{width:"200px",height:"200px"}}/>
          </Box>
            </Box>
            </Zoom>
            <Box
            sx={{
              
              width: "100%",
              direction: "rtl",
             
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontFamily: "Vazirmatn", textAlign: "right" }}
            >
              فتوشاپ/Photoshop
            </Typography>
            <Typography
              sx={{
                fontFamily: "Vazirmatn",
                textAlign: "right",
                marginTop: "8px",
              }}
            >
              Adobe Photoshop
            </Typography>
            <Typography
              sx={{
                fontFamily: "Vazirmatn",
                textAlign: "justify",
                marginTop: "8px",
                textJustify: "inter-word",
              }}
            >
              {str}
              </Typography>
              <Box>
                
                </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "8px",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#1F2533",
                  color: "#EAF0FF",
                  fontFamily: "Vazirmatn",
                  "&:hover": {
                    backgroundColor: "#1F2533",
                  },
                }}
                onClick={() => setResizeBox(!resizebox)}
              >
                کمتر
           
                  <KeyboardArrowUpIcon />
               
              </Button>
            </Box>
          </Box>
          </Box>   
            </Collapse>
      )}

      {/* Related courses */}
      <Box
        sx={{
          direction: "rtl",
          textAlign: "right",
          marginTop: "20px",
          width: "91%",
        }}
      >
        <Typography variant="h4" sx={{ fontFamily: "Vazirmatn" }}>
          دوره های مرتبط{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default Photoshop;
