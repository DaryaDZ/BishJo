import React from 'react'
import './Teachers.css'
import { createSlice } from "@reduxjs/toolkit";
import Teacher1 from "../Assets/Profile/Teacher1.png";
import Teacher2 from "../Assets/Profile/Teacher2.png";
import Teacher3 from "../Assets/Profile/Teacher3.png";
import Teacher4 from "../Assets/Profile/Teacher4.png";
import Teacher5 from "../Assets/Profile/Teacher5.png";
import Teacher6 from "../Assets/Profile/Teacher6.png";



function Teachers() {
  return (
    <div>
      <div>

      <div style={{display: "flex", justifyContent: "space-between", direction: "rtl", margin: "15px", padding: "18px"}}>
      {/* {masterInfo.map((master: any) => {
        master.imgMaster ? (
          )})}
        */}
        <div className='profilesContainer'>
          <div>
            {/* <img               
              src={require(`../Assets/Teachers/${master.Profileimg}`)}
 /> */}
 </div>
 <div>
  <div style={{display: "flex", justifyContent: "space-between"}}>

 <div className='imgProfile'>
  <img src={Teacher1} className="Profileimg" />
 </div>
 <div className='imgProfile'>
  <img src={Teacher2} className="Profileimg" />
 </div>
 <div className='imgProfile'>
  <img src={Teacher3} className="Profileimg" />
 </div>
  </div>

  <div style={{display: "flex", justifyContent: "space-between"}}>
 <div className='imgProfile'>
  <img src={Teacher4} className="Profileimg" />
 </div>
 <div className='imgProfile'>
  <img src={Teacher5} className="Profileimg" />
 </div>
 <div className='imgProfile'>
  <img src={Teacher6} className="Profileimg" />
 </div>
  </div>


          </div>

          <div className='profilebottom'>
            <button className='ProfilesSubmitBtn' >
            تایید
            </button>
          </div>
        </div>
        <div className='textarea'>dsf</div>
      </div>
      
      

      </div>
    </div>
  )
}

export default Teachers
