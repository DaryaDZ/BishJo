import React from "react";
import { ShowAllCourse } from "../features/Bishjo/CourseSlice";
// import { showAllMaster } from "../features/Bishjo/MasterSlice";

import { useSelector } from "react-redux";
// import video1 from "../Assets/Video1.png";
// import { positions } from "@mui/system/Box";
import box from "../Assets/BOX.png";

import "./Categories.css";
import { Link } from "react-router-dom";
function Categories() {
  const AllCourse = useSelector(ShowAllCourse);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // height: "600px",
        marginBottom: "130px",
        flexWrap: "wrap",
      }}
    >
      {AllCourse.payload.courses.courses.map((item: any) => {
        return (
          <Link to={`/singlecourse/${item.id}`} >
          <div
            style={{
              // flexDirection: "column",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px",
              backgroundColor: "#1F2533",
              //  padding: "60px",
              height: "290px",
              width: "280px",
              
              borderRadius: "8px",
              // backgroundColor: "1F2533",
            

            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "2px",

              }}
              >
                {
                  item.picture !== null ?
                  <img
                  style={{
                    backgroundColor: "1F2533",
                    width: "280px",
                    position: "sticky",
                    borderRadius: "8px",
                    marginBottom: "10px",
                    // marginTop: "10px",
                  }}
                    src={require(`../Assets/${item.picture}`)}
                    alt=""
                    
                /> :   <img
                style={{
                  backgroundColor: "1F2533",
                  width: "280px",
                  position: "sticky",
                  borderRadius: "8px",
                  marginBottom: "10px",
                  // marginTop: "10px",
                }}
                  src={require(`../Assets/BrofileBack2.jpg`)}
                  alt=""
                  
              />
    }
           
              <div>
                <div className="mapsname">
                  <div>
                    <div className="priceContainer">
                      <label className="PRICE">{item.price}</label>
                    </div>
                    <div className="TimesContainer">
                      <label>{item.time}</label>
                    </div>
                  </div>
                  <div className="namesContainer">{item.name}</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent:"space-between", 
                      direction: "rtl",
                      marginTop: "20px",
                    }}
                  >
                        {AllCourse.payload.masters.Masters.map((obj: any) => {
                          return <>
                            {obj.id === item.masterID ?
                             <div className="mastersNAME">
                              {obj.Name}
                             </div>:""
                          }
                           
                          </>
                  
                      })}
                    <div className="boxICON">
                      <img className="ICONBOX" src={box} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Link>

        );
      })}
    </div>
  );
}

export default Categories;
