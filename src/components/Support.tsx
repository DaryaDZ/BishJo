import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import "./Select.css";
import React from "react";

const Support = () => {
  const DivsStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#EAF0FF",
    height: "38px",
    fontFamily: "Vazirmatn",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "32px",
    marginTop: "60px",
  };

  return (
    <div>
      <div>
        <label style={DivsStyle}>
          دوره درخواستی ، نظرات ، پیشنهادات و انتقادات خود را با ما به اشتراک
          بزارید
        </label>
      </div>

      <div>
        <Box>
          <TextField
            sx={{
              fontFamily: "Vazirmatn",
              width: "474px",
              height: "56px",
              right: "120px",
              top: "80px",
              backgroundColor: "#EAF0FF",
              float: "right",
              borderRadius: "8px",
              justifyContent: "right",
              direction: "rtl",
            }}
            placeholder="موضوع شما"
            type="text"
          />
          <TextField
            sx={{
              fontFamily: "Vazirmatn",
              width: "474px",
              height: "56px",
              left: "355px",
              // right: "220px",
              top: "165px",
              backgroundColor: "#EAF0FF",
              float: "right",
              marginLeft: "400px",
              borderRadius: "8px",
              justifyContent: "right",
              direction: "rtl",
            }}
            placeholder="ایمیل (جهت اطلاع رسانی شما)"
            type="text"
          />
        </Box>
      </div>
      <div>
        <input 
        className="input5"
        // style={InputsStyle} 
        placeholder="دیدگاه شما.........."
        />
      </div>
          <Button
            style={{
              borderRadius: "8px",
              color: "#323232",
              fontFamily: "Vazirmatn",
              backgroundColor: "#FDBE34",
              width: "184px",
              height: "43px",
              marginTop: "20px",
              marginLeft: "510px"
              // marginTop: "280px",
            }}
          >
            ارسال
          </Button>
    </div>
  );
};

export default Support;
