import React, { useState } from "react";
import unrealEngine from "../Assets/Application/UnrealEngine.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Button, Collapse, Typography,  Modal } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import img1 from "../Assets/UE/ue1.jpg";
import img2 from "../Assets/UE/ue2.webp";
import img3 from "../Assets/UE/ue3.png";
import img4 from "../Assets/UE/ue4.png";

const UnrealEngine = () => {
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

  const str="Unreal Engine (UE) یک موتور بازی گرافیکی کامپیوتری سه بعدی است که توسط اپیک گیمز توسعه یافته و اولین بار در سال 1998 در بازی تیراندازی اول شخص Unreal به نمایش گذاشته شد. در ابتدا برای بازی های تیراندازی اول شخص رایانه های شخصی ساخته شد، از آن زمان در ژانرهای مختلفی از بازی ها مورد استفاده قرار گرفت و توسط صنایع دیگر، به ویژه صنعت فیلم و تلویزیون، مورد استفاده قرار گرفت. Unreal Engine به زبان C++ نوشته شده است و قابلیت حمل و نقل بالایی دارد و از طیف گسترده ای از پلتفرم های دسکتاپ، موبایل، کنسول و واقعیت مجازی پشتیبانی می کند."



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
        Unreal Engine (UE)
            </Typography>
            <Typography
              sx={{
                fontFamily: "Vazirmatn",
                textAlign: "right",
                marginTop: "10px",
              }}
            >
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
            <img src={unrealEngine} alt="" />
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
                  src={unrealEngine}
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
                 Unreal Engine (UE)
                </Typography>
              <Typography
                sx={{
                  fontFamily: "Vazirmatn",
                  textAlign: "right",
                  marginTop: "8px",
                }}
              >
              
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
                <a href="https://www.unrealengine.com/en-US">
                  <Typography sx={CompanyInfo}>
                    شرکت سازنده :unrealengine.com
                  </Typography>
                </a>
                <Typography sx={CompanyInfo}> آخرین ورژن : 5.0</Typography>
                <Typography sx={CompanyInfo}>
                  تاریخ انتشار : فروردين 1401
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

export default UnrealEngine
