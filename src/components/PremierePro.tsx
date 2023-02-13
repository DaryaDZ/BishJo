import React, { useState } from "react";
import AdobePr from "../Assets/Application/AdobePr.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Button, Collapse, Typography, Modal } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

import img1 from "../Assets/Premiere/premierepro1.jpg";
import img2 from "../Assets/Premiere/premierepro2.jpg";
import img3 from "../Assets/Premiere/premierepro3.jpg";
import img4 from "../Assets/Premiere/premierepro4.jpg";





const PremierePro = () => {
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

const str="ک نرم‌افزار ویرایش ویدئو از شرکت ادوبی است. این محصول بخشی از استودیو تولید ادوبی می‌باشد و یک مجموعه از نرم‌افزارهای شنیداری و دیداری دیجیتال استپریمیر پرو، سخت‌افزارها و نرم‌افزارهایی را به همراه دارد و در بیشتر موارد به عنوان یک بسته به نام OEM به همراه کارت‌های ویرایش ویدئویی مانند Matrox RT.X۲ همراه است. همچنین کارت سخت‌افزاری ویدئویی محبوب پرو وان محصولی از شرکت پیناکل آلمان از پراستفاده و رایج‌ترین اقلام وابسته و هماهنگ با این نرم‌افزار حرفه‌ایست.پریمیر پرو، یک نسخه دوباره نوشته شده از نرم‌افزار ادوبی پریمیر می‌باشد که در سال ۲۰۰۳ منتشر شد و از زمانیکه دوباره نوشته شد توسط صنعت فیلم و ویدئو مورد قبول واقع شده‌است.کثر فیلم‌هایی که امروزه ما با نهایت کیفیت و استفاده از انواع تکنولوژی و ویرایشی حرفه‌ای مشاهده می‌کنیم با این محصول ادوبی تدوین شده‌اند. شاید مهم‌ترین خصوصیت را بتوان در این مورد خلاصه نمود که دیگر قرار است از این به بعد ادوبی تنها نسخه‌های ۶۴ بیت برای ادوبی پریمیر ارائه دهد، نه تنها ادوبی پریمیر بلکه افتر افکت هم تنها به صورت ۶۴ بیت عرضه می‌شود؛ این امر هم به این دلیل است که سیستم‌های ۳۲ بیت دیگر توان پردازش‌های سرسام‌آور این دو محصول را ندارند. با این که این نسخه قرار است تنها بر روی سیستم عامل ۶۴ بیت نصب شود اما با توجه به بهینه‌سازی‌های انجام شده سرعت عملکرد نرم‌افزار با افزایش چشم‌گیری رو به رو شده و کاربران سیستم عامل ۶۴ بیت پس از نصب این نسخه می‌توانند این افزایش سرعت را به راحتی حس کنند.[۴]آخرین نسخه این نرم‌افزار ۲۰۲۰ نسخه ۱۴ است؛ که در این ورژن قابلیت‌های جدید در بخش Essential Graphics, Auto Reframe، قابلیت افزایش ولوم صدا تا ۱۵ db، پشتیبانی از فرمت‌های جدید (H264, H265 (HEVC),ProRes HDR) برای ویندوز و مک و… افزوده شده‌اس"

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
              پريمير پرو/Premiere Pro
            </Typography>
            <Typography
              sx={{
                fontFamily: "Vazirmatn",
                textAlign: "right",
                marginTop: "10px",
              }}
            >
              Adobe Premiere Pro
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
            <img src={AdobePr} alt="" />
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
                  src={AdobePr}
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
               پريمير پرو/Premiere Pro
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Vazirmatn",
                  textAlign: "right",
                  marginTop: "8px",
                }}
              >
                 Adobe Premiere Pro
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

export default PremierePro
