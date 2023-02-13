import React, { useState } from "react";
import AdobeAE from "../Assets/Application/Adobe AE.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Button, Collapse, Typography,  Modal } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import img1 from "../Assets/photoshop/img1.jpg";
import img2 from "../Assets/photoshop/img2.jpg";
import img3 from "../Assets/photoshop/img3.webp";
import img4 from "../Assets/photoshop/img4.webp";

const AfterEffect = () => {
  const boxStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    color: "#EAF0FF",
    marginTop: "220px",
  };
  const CompanyInfo = {
    fontFamily: "Vazirmatn",
    fontSize: "16px",
    marginTop: "5px",
  };

  const str="نرم‌افزار ایجاد جلوه‌های بصری دیجیتال، موشن گرافیک و برنامهٔ کاربردیِ ترکیب عناصر بصری مختلف است که توسط شرکت ادوبی سیستم توسعه یافته و در فرایند پس از تولید در فیلم‌سازی و تولیدات تلویزیونی مورد استفاده قرار می‌گیرد.در میان دیگر نرم‌افزارهای گرافیکی، افتر افکتس را می‌توان برای کروماکی، اصلاح حرکت، اندازه و جهت، ترکیب عناصر بصری و انیمیشن استفاده کرد. همچنین به عنوان یک نرم‌افزار بسیار پایه برای ویرایشگر غیرخطی، ویرایشگر صوتی و واسطهٔ تبدیل کدها استفاده کرد.این نرم‌افزار یکی از قدرتمندترین ابزارهای پویانمایی دوبعدی و جلوه‌های ویژهٔ سینمایی در جهان است که انقلاب وسیعی در نگرش نسبت به پویانمایی و تلویزیون پدیدآورده. افتر افکتس هماهنگی بالایی با ادوبی فوتوشاپ و ادوبی پریمیر و ادوبی آدیشن دارد."



  const [resizebox, setResizeBox] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModal2, setOpenModal2] = useState<boolean>(false);
  const [openModal3, setOpenModal3] = useState<boolean>(false);
  const [openModal4, setOpenModal4] = useState<boolean>(false);
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
              افترافكت/After Effect
            </Typography>
            <Typography
              sx={{
                fontFamily: "Vazirmatn",
                textAlign: "right",
                marginTop: "10px",
              }}
            >
              Adobe After Effect
            </Typography>
            <Typography
              sx={{
                fontFamily: "Vazirmatn",
                textAlign: "justify",
                marginTop: "10px",
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
                marginTop: "10px",
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
            <img src={AdobeAE} alt="" />
          </Box>
          {/* </Zoom> */}
        </Box>
      ) : (
        <Collapse in={resizebox}>
          <Box
            sx={{
              backgroundColor: "#3C4865",
              width: "91%",
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              flexDirection: "column",
              padding: "20px",
              borderRadius: "16px",
              marginLeft: "60px",
            }}
          >
            {/* <Zoom in={resizebox} timeout={1000}> */}
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
                <img
                  src={AdobeAE}
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </Box>
            </Box>
            {/* </Zoom> */}
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
                  افترافكت/After Effect
                </Typography>
              <Typography
                sx={{
                  fontFamily: "Vazirmatn",
                  textAlign: "right",
                  marginTop: "8px",
                }}
              >
              Adobe After Effect
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
              <Box
                sx={{
                  marginTop: "50px",
                  dipslay: "flex",
                }}
              >
                <Button
                  sx={{
                    position: "relative",
                    width: "270px",
                    height: "200px",
                    marginRight: "20px",
                  }}
                  onClick={() => setOpenModal(!openModal)}
                >
                  <img src={img1} alt="" className="photoshopIMg" />
                  <ZoomInIcon
                    sx={{
                      position: "absolute",
                      color: "#898c96",
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": {
                        color: "#EAF0FF",
                      },
                    }}
                  />
                </Button>

                <Modal
                  open={openModal}
                  onClose={() => setOpenModal(!openModal)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={img1} alt="" className="ModalImg" />
                </Modal>

                <Button
                  sx={{
                    position: "relative",
                    width: "270px",
                    height: "200px",
                    marginRight: "20px",
                  }}
                  onClick={() => setOpenModal2(!openModal2)}
                >
                  <img src={img2} alt="" className="photoshopIMg" />
                  <ZoomInIcon
                    sx={{
                      position: "absolute",
                      color: "#898c96",
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": {
                        color: "#EAF0FF",
                      },
                    }}
                  />
                  </Button>
                  <Modal
                  open={openModal2}
                  onClose={() => setOpenModal2(!openModal2)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={img2} alt="" className="ModalImg" />
                </Modal>
                <Button
                  sx={{
                    position: "relative",
                    width: "270px",
                    height: "200px",
                    marginRight: "20px",
                  }}
                  onClick={() => setOpenModal3(!openModal3)}
                >
                  <img src={img3} alt="" className="photoshopIMg" />
                  <ZoomInIcon
                    sx={{
                      position: "absolute",
                      color: "#898c96",
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": {
                        color: "#EAF0FF",
                      },
                    }}
                  />
                  </Button>
                  <Modal
                  open={openModal3}
                  onClose={() => setOpenModal3(!openModal3)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={img3} alt="" className="ModalImg" />
                </Modal>
                <Button
                  sx={{
                    position: "relative",
                    width: "270px",
                    height: "200px",
                    marginRight: "20px",
                  }}
                  onClick={() => setOpenModal4(!openModal4)}
                >
                  <img src={img4} alt="" className="photoshopIMg" />
                  <ZoomInIcon
                    sx={{
                      position: "absolute",
                      color: "#898c96",
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": {
                        color: "#EAF0FF",
                      },
                    }}
                  />
                  </Button>
                  <Modal
                  open={openModal4}
                  onClose={() => setOpenModal4(!openModal4)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={img4} alt="" className="ModalImg" />
                </Modal>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "80px",
                }}
              >
                <a href="https://www.adobe.com/products/photoshop.html">
                  <Typography sx={CompanyInfo}>
                    شرکت سازنده : Adobe.com
                  </Typography>
                </a>
                <Typography sx={CompanyInfo}> آخرین ورژن : 24.0</Typography>
                <Typography sx={CompanyInfo}>
                  تاریخ انتشار : آبان 1401
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "80px",
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
          marginTop: "250px",
          width: "91%",
        }}
      >
        <Typography variant="h4" sx={{ fontFamily: "Vazirmatn" }}>
          دوره های مرتبط{" "}
        </Typography>
      </Box>
    </Box>
  )
}

export default AfterEffect
