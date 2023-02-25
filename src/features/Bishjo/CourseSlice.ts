import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface CourseState{ 
  courses: courses[];
}

interface courses {

  name: string,
  masterID: number,
  price : string,
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
    name:" آموزش ایلاستریتور  -  ابزار اصلاح کردن تصاویر ",
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