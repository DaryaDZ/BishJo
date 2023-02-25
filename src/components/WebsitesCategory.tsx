import React from 'react'
import { Outlet } from 'react-router-dom'
import './WebsitesCategory.css';
// import Categories from './Categories';
// import {ShowAllCourse} from '../features/Bishjo/CourseSlice';
// import { useSelector } from 'react-redux';
import Sidebar from './Sidebar'


function WebsitesCategory() {
  // const AllCourse=useSelector(ShowAllCourse)
console.log()
  return (
    <div style={{display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    margin: "30px",
    }}>

      {/* <Categories /> */}
{/* {AllCourse.payload.courses.courses.map((item:any)=>{return item.name})} */}
    <div className='WebsiteCategorysWrapper'>
      
      <Outlet />
    </div>
      <Sidebar />
    </div>
  )
}

export default WebsitesCategory
