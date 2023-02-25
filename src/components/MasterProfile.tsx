import React, { useState } from "react";
import BrandIcon from "../Assets/Brand Icon.png";
import notifications from "../Assets/notifications.png";
import img from "../Assets/img.jpg";
import { useDispatch, useSelector } from "react-redux";
import star from "../Assets/star.png";
import AddingCourse from "../Assets/Adding Course.png";
import {
  Box,
  Typography,
  CardMedia,
  Button,
  Menu,
  MenuItem,
  InputLabel,
  Fade,
  Card,
  CardContent,
} from "@mui/material";
import vector from "../Assets/Vector.png";
import vector1 from "../Assets/Vector (1).png";
import vector2 from "../Assets/Vector (2).png";
import vector3 from "../Assets/Vector (3).png";
import { PieChart, Pie, Cell } from "recharts";
import Footer from "../page/Footer";
import AddingCTA from "../Assets/AddingCTA (3).png";
import AddingCTA1 from "../Assets/AddingCTA (1).png";
import AddingCTA2 from "../Assets/AddingCTA (2).png";
import { showAllMaster } from "../features/Bishjo/MasterSlice";
import { Link } from "react-router-dom";

const MasterProfile = () => {
  const masterInfo = useSelector((state: any) => state.masters.CurrentMaster);

  const AllMaster: any = useSelector(showAllMaster);
  // console.log(AllMaster)
  const cat = masterInfo.map((item: any) => {
    return AllMaster.payload.courses.courses.filter(
      (element: any) => element.masterID === item.id
    );
  });
  const x: any = [];
  const [file, setFile] = useState("");
  const [img, setImg] = useState("")
  const [mov,setMov]=useState("")


  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const [courseCategory, setCourseID] = useState<any>();
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel: any = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const movieInfo = cat.map((item: any) =>
    item.filter((i: any) => i.category == courseCategory)
  );
  const boxStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "space-between",
    justifyContent: "center",
    color: "#EAF0FF",
    padding: "60px",
  };
  const NavBarStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "50px",
  };
  const ChildBox = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const BOxLeffChildstyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      <Box sx={NavBarStyle}>
        <Box sx={ChildBox}>
          {masterInfo.map((master: any) => {
            return master.imgMaster ? (
              <img
                src={require(`../Assets/Teachers/${master.imgMaster}`)}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            ) : (
              <img
                src={img}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            );
          })}


          <img
            src={notifications}
            alt=""
            style={{ width: "26px", height: "33px", marginLeft: "20px" }}
          />
        </Box>
        <Box sx={ChildBox}>
          <img src={BrandIcon} alt="" />
        </Box>
      </Box>
      {masterInfo.map((item: any) => {
        return (
          <>
            <Box sx={boxStyle}>
              <Box
                sx={{
                  flex: "3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: "30px",
                }}
              >
                <Box sx={BOxLeffChildstyle}>
                  <Box
                    sx={{
                      width: "50%",
                      dispaly: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Button
                      sx={{
                        border: "3px solid #FDBE34",
                        fontFamily: "Vazirmatn",
                        color: "#EAF0FF",
                        width: "140px",
                      }}
                    >
                      اعمال تغییر
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      width: "50%",
                      dispaly: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      direction: "rtl",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontFamily: "Vazirmatn" }}>
                      معرفی شما{" "}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={BOxLeffChildstyle}>
                  <CardMedia
                    component="video"
                    sx={{ width: "100%", height: "500px" }}
                    controls
                    // image={
                    //   "https://aspb20.cdn.asset.aparat.com/aparat-video/14ecce5bb86f2dc1e5048f60e12f31db20898355-240p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImVmNjg1ODI3MWI5NzgzNWJjMjRkYzViODRjNjg0NTk4IiwiZXhwIjoxNjc3MDY2ODQ0LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.Wt13iF1m0WvbddkOMW6XHk0DStZxgMmfFlpfQ32WoHk"
                    // }
                  ></CardMedia>
                </Box>
                <Box sx={BOxLeffChildstyle}>
                  <Typography
                    sx={{
                      fontFamily: "Vazirmatn",
                      textAlign: "justify",
                      direction: "rtl",
                    }}
                  >
                    {item.intro}
                  </Typography>
                  <img
                    src={require(`../Assets/Teachers/${item.imgMaster}`)}
                    alt=""
                    style={{ marginTop: "20px", marginLeft: "10px" }}
                  />
                </Box>
                <Box sx={BOxLeffChildstyle}>
                  <Typography
                    sx={{
                      fontFamily: "Vazirmatn",
                      textAlign: "justify",
                      direction: "rtl",
                      marginTop: "30px",
                    }}
                  >
                    {item.intro}
                    {item.intro}
                    {item.intro}
                    {item.intro}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "150px",
                }}
              >
                {masterInfo.map((master: any, index: any) => {
                  return (
                    <>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        key={index}
                      >
                        {" "}
                        <img
                          src={require(`../Assets/Teachers/${item.imgMaster}`)}
                          alt=""
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            borderRadius: "50%",
                          }}
                        />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "Vazirmatn",
                          fontSize: "22px",
                        }}
                      >
                        {master.Name}
                      </Typography>
                      <Typography
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "Vazirmatn",
                          fontSize: "15px",
                          marginBottom: "10px",
                        }}
                      >
                        {master.field}
                      </Typography>
                      <hr />
                      <Box
                        sx={{
                          // backgroundColor: "red",
                          marginTop: "20px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          sx={{ fontFamily: "Vazirmatn", fontSize: "20px" }}
                        >
                          تعداد دنبال كنندگان{" "}
                        </Typography>
                        <Typography
                          sx={{ fontFamily: "Vazirmatn", fontSize: "20px" }}
                        >
                          {master.followers}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Vazirmatn",
                            fontSize: "18px",
                            direction: "rtl",
                            margin: "15px 0px",
                          }}
                        >
                          {master.courseCount}
                          دوره آپلود شده
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Vazirmatn",
                            fontSize: "18px",
                            direction: "rtl",
                            margin: "15px 0px",
                          }}
                        >
                          300 ساعت محتواي آموزشي
                        </Typography>
                        <PieChart width={200} height={300}>
                          <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {data.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                              />
                            ))}
                          </Pie>
                        </PieChart>
                      </Box>
                      <hr />
                      <Box
                        sx={{
                          marginTop: "20px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={vector}
                          alt=""
                          className="mastersocialMedia"
                        />
                        <img
                          src={vector3}
                          alt=""
                          className="mastersocialMedia"
                        />
                        <img
                          src={vector2}
                          alt=""
                          className="mastersocialMedia"
                        />
                        <img
                          src={vector1}
                          alt=""
                          className="mastersocialMedia"
                        />
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Box>
          </>
        );
      })}
      <Box
        sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}
      >
        <Box sx={{ width: "92%" }}>
          <hr />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: "95%" }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Vazirmatn",
              textAlign: "right",
              width: "98%",
              color: "#EAF0FF",
            }}
          >
            افزودن محتوای جدید
          </Typography>
        </Box>
        <Box sx={{ width: "95%", marginTop: "50px", direction: "rtl" }}>
          <input
            type="file"
            id="fileID"
            accept="video/*"
            style={{ display: "none" }}
          />
          <label htmlFor="fileID" style={{ marginLeft: "20px" }}>
            <img src={AddingCTA1} alt="" />
          </label>

          <input
            type="file"
            id="fileID1"
            accept="image/*"
            style={{ display: "none" }}
          />
          <label htmlFor="fileID1" style={{ marginLeft: "20px" }}>
            <img src={AddingCTA2} alt="" />
          </label>
          <input
            type="file"
            id="fileID2"
            accept="file/*"
            style={{ display: "none" }}
          />
          <label htmlFor="fileID2">
            <img src={AddingCTA} alt="" />
          </label>
        </Box>
        <Box sx={{ width: "95%", direction: "rtl", margin: "50px 10px" }}>
          {cat.map((item: any) => {
            return (
              <>
                <InputLabel
                  id="dropdown"
                  onClick={handleClick}
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  sx={{
                    backgroundColor: "white",
                    fontFamily: "Vazirmatn",
                    padding: "14px",
                    width: "45%",
                    borderRadius: "10px",
                  }}
                >
                  {item[0].category}
                </InputLabel>

                <Menu
                  open={open}
                  id="dropdown"
                  MenuListProps={{
                    "aria-labelledby": "dropdown",
                  }}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                  sx={{ width: "100%" }}
                >
                  {item.map((element: any) => {
                    if (!x.includes(element.category)) {
                      x.push(element.category);
                    }
                  })}
                  {x.map((item: any) => {
                    return (
                      <MenuItem
                        onClick={() => setCourseID(item)}
                        sx={{
                          width: "100%",
                          marginLeft: "455px",
                          borderRadius: "16pxx",
                          fontFamily: "Vazirmatn",
                        }}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </>
            );
          })}
        </Box>
      </Box>

      {courseCategory ? (
        <Box
          sx={{
            margin: "100px 50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "rigt",
            direction: "rtl",
          }}
        >
             <input
                    type="file"
                    id="fileID"
                    accept="video/*"
                    style={{ display: "none" }}
                  />
                  <label htmlFor="fileID" style={{ marginLeft: "20px",marginBottom:"150px" }}>
                    <img src={AddingCourse} alt="" />
                  </label>
          {movieInfo.map((item: any) => {
            return item.map((i: any) => {
              return (
                <>
                  <Link to={`/singlecourse/${i.id}`}>
                    <Card
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: "column",
                        marginLeft: "20px",
                        hieght: "800px",
                        backgroundColor: "#313B52",
                        color: "#EAF0FF",
                        borderRadius: "16px",
                        height: "350px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="194"
                        image={require(`../Assets/${i.picture}`)}
                        alt=""
                      />

                      <CardContent
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          direction: "ltr",
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            style={{
                              height: "10px",
                              width: "10px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            src={star}
                            alt=""
                          />

                          {i.rate}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {i.time}
                        </div>
                      </CardContent>

                      <div style={{}}>{i.name}</div>
                      <div
                        style={{
                          direction: "rtl",
                          width: "90%",
                          margin: "10px",
                        }}
                      >
                        {" "}
                        {AllMaster.payload.masters.Masters.map((obj: any) => {
                          return <>{obj.id === i.masterID ? obj.Name : ""}</>;
                        })}
                      </div>
                    </Card>
                  </Link>
            
                </>
              );
            });
          })}
             
        </Box>
      ) : (
        ""
      )}
      <Footer />
    </>
  );
};

export default MasterProfile;
