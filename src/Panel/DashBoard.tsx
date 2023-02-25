import React from 'react'
import school from "../Assets/ICONS/school.png";
import chat from "../Assets/ICONS/chat.png";
import Frame17 from  "../Assets/ICONS/Frame17.png"
import Frame18 from  "../Assets/ICONS/Frame18.png"
import Gp73 from "../Assets/ICONS/Gp73.png"
import Gp74 from "../Assets/ICONS/Gp74.png"
import Gp75 from "../Assets/ICONS/Gp75.png"
import Group from "../Assets/ICONS/Group.png"
import './Dashboard.css'




function DashBoard() {
  return (
    <div>
      <div style={{display: "flex", direction: "rtl", margin: "40px",
       justifyContent: "center", alignItems: "center"
       }}>
      <div>

        <div style={{display: "flex"}}>
          <div style={{backgroundColor: "#E9F2FB", width: "206px", height: "198px", borderRadius: "8px"}}>
            <div >
              <div style={{display: "flex", justifyContent: "space-between", margin: "12px"}}>
              <div>
                <div>اساتید</div>
                <div style={{fontWeight:"500", fontSize:"28px"}}>۴۰</div>
              </div>
              <div>
                <img src={school} />
              </div>
              </div>
            </div>
            <div style={{marginTop: "30px", position: "relative"}}>
              < hr />
              <div style={{marginBottom: "30px", display: "flex"}}>
                <img src={Gp74} style={{height: "100px", width: "80px", position: "absolute", marginRight: "100px"}} />
              </div>
              <div style={{marginTop: "20px"}}>
              <img src={Gp73} />
              </div>
            </div>
            <div style={{fontSize: "12px", marginRight: "8px", marginBottom: "8px"}}>
            اساتید فعال
            </div>
          </div>
          <div style={{backgroundColor: "#E9F2FB", width: "206px", height: "198px", marginRight: "30px", borderRadius: "8px"}}>
          <div >
              <div style={{display: "flex", justifyContent: "space-between", margin: "12px"}}>
              <div>
                <div>پیام‌های کاربران</div>
                <div style={{fontWeight:"500", fontSize:"28px"}}>۲۵</div>
              </div>
              <div >
                <img src={chat} />
              </div>
              </div>
            </div>
            <div style={{marginTop: "30px", position: "relative"}}>
              < hr />
              <div style={{marginBottom: "30px", display: "flex"}}>
                <img src={Gp75} style={{height: "100px", width: "80px", position: "absolute", marginLeft: "10px"}} />
              </div>
              <div style={{marginTop: "20px"}}>
              <img src={Frame18} />
              </div>
            </div>
            <div style={{fontSize: "12px", marginRight: "8px", marginBottom: "8px", display: "flex", justifyContent: "space-between", marginLeft: "8px"}}>
              <div>
              آخرین زمان پاسخ گویی:
              </div>
         <div>
         ۱۵:۳۰
         </div>
            </div>
            </div>
        </div>
        <div style={{backgroundColor: "#E9F2FB", width: "442px", height: "402px" , marginTop: "30px", borderRadius: "8px", }}>
          <div style={{marginTop: "10px"}}>
          <div style={{justifyContent: "center", alignItems: "center", marginTop: "30px", marginRight: "80px"}}>مجموع تعداد ساعت بازدید از دوره ها در هر ماه</div>
          </div>
          <div style={{marginTop: "40px"}} >
            <img src={Frame17} style={{width: "440px"}} />
          </div>

        </div>

      </div>

      <div style={{backgroundColor: "#E9F2FB", width: "328px", height: "630px", marginRight: "30px", borderRadius: "8px"}}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "4px"}}>
          <img style={{display: "flex", justifyContent: "center", alignItems: "center", width: "342px", height: "300px"}} src={Group} />
        </div>
        <div className='CategoryContainer'>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className='DashboardCategories' style={{backgroundColor: "#D2DAE2", color: "#F96969", borderRadius: "4px", gap: "10px"}}>طراحی</div>
            <div>20</div>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className='DashboardCategories' style={{backgroundColor: "#D2DAE2",color: "#C87C00", borderRadius: "4px", gap: "10px"}}>تدوین</div>
            <div>16</div>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className='DashboardCategories' style={{backgroundColor: "#D2DAE2",color: "#B6B932", borderRadius: "4px", gap: "10px"}}>عکاسی</div>
            <div>14</div>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className='DashboardCategories' style={{backgroundColor: "#D2DAE2",color: "#00B573", borderRadius: "4px", gap: "10px"}}>نویسندگی</div>
            <div>12</div>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className='DashboardCategories' style={{backgroundColor: "#D2DAE2",color: "#45BFBF", borderRadius: "4px", gap: "10px"}}>نوازندگی</div>
            <div>8</div>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className='DashboardCategories' style={{backgroundColor: "#D2DAE2",color: "#373737", borderRadius: "4px", gap: "10px"}}>طراحی رابط کاربری</div>
            <div>10</div>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className='DashboardCategories' style={{backgroundColor: "#D2DAE2",color: "#B455FF", borderRadius: "4px", gap: "10px"}}>طراحی سه بعدی</div>
            <div>10</div>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className='DashboardCategories' style={{backgroundColor: "#D2DAE2",color: "#3555C6", borderRadius: "4px", gap: "10px"}}>بازی سازی</div>
            <div>10</div>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default DashBoard
