import React from 'react'
import { Link } from 'react-router-dom';
import './WebsitesCategory.css';
import icon3 from "../Assets/ICONS/desktop.png";
import draw from "../Assets/ICONS/draw.png";
import stadia from "../Assets/ICONS/stadia.png";
import video from "../Assets/ICONS/video.png";
import view from "../Assets/ICONS/view.png";





function Sidebar() {
  return (
    <div className="SideBar">
    <div className="SidebarWrapper">
        <div className="SidebarMenu">
            <h3 className="SidebarTitle">دسته بندی ها</h3>
          

            <div 
            style={{width:"100%", justifyContent: "right", display: "flex", float: "right" }}>

           <div>

            <ul
            style={{
                display: "flex",
                direction: "ltr",
                justifyContent: "right",
                marginTop: "20px",
                marginRight: "10px",

                
            }
        }>
                <div style={{
                    marginRight: "10px",
                    color: "#EAF0FF",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                }}>
                همه
                </div>
                <div
                    style={{ display:"flex",
                   alignItems:"center",
                   justifyContent:"center",}} 
               
                >
                    <img src={icon3} />
                </div>
            </ul>

            <Link to='singlecategory' >
            <ul style={{
                display: "flex",
                direction: "ltr",
                justifyContent: "right",
                marginTop: "20px",
                marginRight: "10px",


            }}>
                <div style={{
                    marginRight: "10px",
                    color: "#EAF0FF",
                }}>
                طراحی
                </div>
                <div
                 style={{ display:"flex",
                 alignItems:"center",
                 justifyContent:"center",}} 
                 >
                    <img src={draw} />
                </div>
            </ul>
                    </Link>

            <ul style={{
                display: "flex",
                direction: "ltr",
                justifyContent: "right",
                marginTop: "20px",
                marginRight: "10px",


            }}>
                <div style={{
                    marginRight: "10px",
                    color: "#EAF0FF",
                }}>
                تدوین
                </div>
                <div
                 style={{ display:"flex",
                 alignItems:"center",
                 justifyContent:"center",}} 
                >
                    <img src={video} />
                </div>
            </ul>

            <ul style={{
                display: "flex",
                direction: "ltr",
                justifyContent: "right",
                marginTop: "20px",
                marginRight: "10px",


            }}>
                <div style={{
                    marginRight: "10px",
                    color: "#EAF0FF",
                }}>
                بازی سازی
                </div>
                <div
                 style={{ display:"flex",
                 alignItems:"center",
                 justifyContent:"center",}} 
                >
                    <img src={stadia} />
                </div>
            </ul>

            <ul style={{
                display: "flex",
                direction: "ltr",
                justifyContent: "right",
                marginTop: "20px",
                marginRight: "10px",

            }}>
                <div style={{
                    marginRight: "10px",
                    color: "#EAF0FF",
                }}>
                مدل سازی سه بعدی 
                </div>
                <div
                 style={{ display:"flex",
                 alignItems:"center",
                 justifyContent:"center",}} 
                >
                    <img src={view} />
                </div>
            </ul>

           </div>

            </div>
        </div>
        
    </div>
</div>   
    )
  }
  
  export default Sidebar
  
  // <div>
  //   <Link to='./design' >سلااااااام</Link>
  //   <Link to='./singlecategory' >زشفثلخقغ</Link>
  // </div>