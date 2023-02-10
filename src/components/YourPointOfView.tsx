import { TextareaAutosize, TextField } from "@mui/material";
import { Box } from "@mui/system";
// import Textarea from '@mui/joy/Textarea';
import React from "react";
import "./PointofView.css";

function YourPointOfView() {
  const DivsDisign = {
    display: "flex",
  };
  return (
    <div>
      {/* <div style={DivsDisign}> */}
      <div className="divsdesign">
        <div>
          <div className="txt13">
            <label>دیدگاهتان را بنویسید</label>
          </div>
          <div className="txt14">
            <label>نشانی ایمیل شما منتشر نخواهد شد</label>
          </div>
          <Box>
            <TextField
              sx={{
                fontFamily: "Vazirmatn",
                width: "474px",
                height: "56px",
                right: "24px",
                top: "127px",
                backgroundColor: "#EAF0FF",
                float: "right",
                borderRadius: "8px",
                justifyContent: "right",
                direction: "rtl",
              }}
              // id="outlined-basic"
              // label="عنوان"
              placeholder="عنوان"
              type="text"
              // variant="outlined"
            />
            <TextField
              sx={{
                fontFamily: "Vazirmatn",
                width: "474px",
                height: "56px",
                right: "24px",
                top: "177px",
                backgroundColor: "#EAF0FF",
                float: "right",
                marginLeft: "400px",
                // right: "24px",
                // top: "227px",
                // backgroundColor: "#EAF0FF",
                // float: "right",
                borderRadius: "8px",
                justifyContent: "right",
                direction: "rtl",
              }}
              // id="outlined-basic"
              placeholder="نام"
              type="text"
              // variant="outlined"
            />
            <TextField
              sx={{
                fontFamily: "Vazirmatn",
                width: "474px",
                height: "56px",
                right: "24px",
                top: "227px",
                float: "right",
                marginLeft: "400px",
                backgroundColor: "#EAF0FF",
                borderRadius: "8px",
                justifyContent: "right",
                direction: "rtl",

              }}
              // label="ایمیل"
              placeholder="ایمیل"
              type="text"
            />
          </Box>
        </div>
        <div className="txt15">
          دیدگاه
        </div>
        <input className="input4" />
      </div>
    </div>
  );
}

export default YourPointOfView;
