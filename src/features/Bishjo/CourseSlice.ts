import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface CourseState{ 
  courses: courses[];
}

interface courses {

  name: string,
  masterID: number,
  price : string|null,
  tag: string,
  time: string,
  category: string,
  picture: string|null,
  information: string|null,
  rate: string|null,
  id: number,

 
  // username: string,
  // email: string,
  // phone: string,
  // password:string,
}
const { v4: uuidv4 } = require("uuid");

const initialState: CourseState={
  courses:[{
    name:"آموزش Photoshop - رنگ ها (مقدماتی)",
    masterID:1,
    price: "۲۰۰۰",
    time: "۳ ساعت ",
    category: "طراحی گرافیک",
    tag: "Photoshop",
    information: "jdkj",
    rate: "9",
    picture: "Video3.png",
    id: 111,

  },
  {
    name:"آموزش Photoshop - رنگ ها (پیشرفته)",
    masterID:2,
    price: "۲۰۰۰",
    time: "۳ ساعت ",
    category: "انیمیشن سازی",
    tag: "Photoshop",
    information: "jdkj",
    rate: "9",
    picture: "Video2.png",
    id: 112,

  },
  {
    name:" آموزش مقدماتی Blender",
    masterID:2,
    price: "۲۰۰۰",
    time: "۳ ساعت ",
    category: "انیمیشن سازی",
    tag: "Photoshop",
    information: "jdkj",
    rate: "5",
    picture: "Video1.png",
    id: 113,

  },
  {
    name:" آموزش Blender - مدل سازی",
    masterID:2,
    price: "۲۰۰۰",
    time: " ‌۵ ساعت",
    category: "انیمیشن سازی",
    tag: "Photoshop",
    information: "jdkj",
    rate: "5",
    picture: "Video4.png",
    id: 114,
  
  },
  {
    name:" آموزش Photoshop - قلم ها",
    masterID:2,
    price: "۲۰۰۰",
    time: " ‌۵  ساعت",
    category: "انیمیشن سازی",
    tag: "Photoshop",
    information: "jdkj",
    rate: "5",
    picture: "Video4.png",
    id: 115,
  
  },
  {
    name:" آموزش مقدماتی Zbrush",
    masterID:1,
    price: "۲۰۰۰",
    time: " ‌۵ ساعت",
    category: "ایلاستریتور",
    tag: "Photoshop",
    information: "jdkj",
    rate: "5",
    picture: "Video5.png",
    id: 116,
  
  },
  {
    name:" آموزش Photoshop - قلم ها",
    masterID:1,
    price: "۲۰۰۰",
    time: " ‌۵ ساعت",
    category: "طراحی گرافیک",
    tag: "Illustrator",
    information: "jdkj",
    rate: "5",
    picture: "Video4.png",
    id: 117,
 
  },
  {
    name:" آموزش ایلاستریتور  -  اصلاح کردن تصاویر ",
    masterID:1,
    price: "۲۰۰۰",
    time: " ‌۵ ساعت",
    category: "ایلاستریتور",
    tag: "Illustrator",
    information: "jdkj",
    rate: "5",
    picture: "Video5.png",
    id: 118,
 
  },
  
]
}

export const CourseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    ShowAllCourse: (state, action) => {
     state.courses.map((item:any)=>
     {return item.name}
     
     )
    },
    AddCourse: (state, action) => {
      state.courses.push({
        name: action.payload.name,
        masterID: action.payload.masterID,
        price : null,
        tag: action.payload.tag,
        time: action.payload.time,
        category: action.payload.category,
        // picture:action.payload.picture,
        picture: null,
        information: action.payload.information,
        rate: null,
        id:action.payload.id,
      })
      console.log(action.payload)
    },
  }
 

})

// Action creators are generated for each case reducer function
export const {ShowAllCourse,AddCourse} = CourseSlice.actions

export default CourseSlice.reducer