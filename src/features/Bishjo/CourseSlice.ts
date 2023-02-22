import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface CourseState{ 
  courses: courses[];
}

interface courses {

  name: string,
  mastersName: string,
  price : string,
  tag: string,
  time: string,
  category: string,
  picture: string|null,
  trailer: string|null,
  information: string|null,
  rate: string|null,
  id: number,

 
  // username: string,
  // email: string,
  // phone: string,
  // password:string,
}

const initialState: CourseState={
  courses:[{
    name:"آموزش Photoshop - رنگ ها (مقدماتی)",
    mastersName: "چنگیز مرادی",
    price: "۲۰۰۰",
    time: "۳ ساعت ",
    category: "طراحی",
    tag: "Photoshop",
    information: "jdkj",
    rate: "9",
    picture: "Video3.png",
    trailer: null,
    id: 111,

  },
  {
    name:"آموزش Photoshop - رنگ ها (پیشرفته)",
    mastersName: "چنگیز مرادی",
    price: "۲۰۰۰",
    time: "۳ ساعت ",
    category: "طراحی",
    tag: "Photoshop",
    information: "jdkj",
    rate: "9",
    picture: "Video2.png",
    trailer: null, 
    id: 112,

  },
  {
    name:" آموزش مقدماتی Blender",
    mastersName: " سکینه جعفری",
    price: "۲۰۰۰",
    time: "۳ ساعت ",
    category: "طراحی",
    tag: "Photoshop",
    information: "jdkj",
    rate: "5",
    picture: "Video1.png",
    trailer: null,  
    id: 113,

  },
  {
    name:" آموزش Blender - مدل سازی",
    mastersName: " سکینه جعفری",
    price: "۲۰۰۰",
    time: " ‌۵ ساعت",
    category: "طراحی",
    tag: "Photoshop",
    information: "jdkj",
    rate: "5",
    picture: "Video4.png",
    trailer: null,
    id: 114,
  
  },
  {
    name:" آموزش Photoshop - قلم ها",
    mastersName: " سکینه جعفری",
    price: "۲۰۰۰",
    time: " ‌۵  ساعت",
    category: "طراحی",
    tag: "Photoshop",
    information: "jdkj",
    rate: "5",
    picture: "Video4.png",
    trailer: null,
    id: 115,
  
  },
  {
    name:" آموزش مقدماتی Zbrush",
    mastersName: " سکینه جعفری",
    price: "۲۰۰۰",
    time: " ‌۵ ساعت",
    category: "طراحی",
    tag: "Photoshop",
    information: "jdkj",
    rate: "5",
    picture: "Video5.png",
    trailer: null,
    id: 116,
  
  },
  {
    name:" آموزش Photoshop - قلم ها",
    mastersName: " سکینه جعفری",
    price: "۲۰۰۰",
    time: " ‌۵ ساعت",
    category: "طراحی",
    tag: "Photoshop",
    information: "jdkj",
    rate: "5",
    picture: "Video4.png",
    trailer: null, 
    id: 117,
 
  },
  {
    name:" آموزش Photoshop - قلم ها ",
    mastersName: " سکینه جعفری",
    price: "۲۰۰۰",
    time: " ‌۵ ساعت",
    category: "طراحی",
    tag: "Photoshop",
    information: "jdkj",
    rate: "5",
    picture: "Video5.png",
    trailer: null, 
    id: 118,
 
  },
  
]
}

export const CourseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    ShowAllCourse: (state, action) => {
     const allCourse=state.courses.map((item:any)=>
     {return item.name}
     
     )
    }
    // signupUser: (state, action) => {
    //   state.courses.push({


    //     username: action.payload.username,
    //     email: action.payload.email,
    //     phone: action.payload.phone,
    //     password:action.payload.password
    //   })
      // console.log(action.payload)
      
    // }
  }

})

// Action creators are generated for each case reducer function
export const {ShowAllCourse} = CourseSlice.actions

export default CourseSlice.reducer