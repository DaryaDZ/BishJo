import { createSlice } from "@reduxjs/toolkit";
const { v4: uuidv4 } = require('uuid');





interface MasterState {
  Masters: [
    {
      id: number;
      Name: string | null;
      username: string;
      phoneNumber: string;
      imgMaster: string | null;
      intro: string | null;
      followers: string | null;
      courseCount: string | null;
      field: string | null;
      courses: {
        courseId: number;
        courseName: string;
        trailer: string | null;
        catergory: string;
     
      }[] | null;
    }
  ];
  CurrentMaster: {
    id: number;
    Name: string|null;
    username: string;
    phoneNumber: string;
    imgMaster: string | null;
    intro: string | null;
    followers: string | null;
    courseCount: string | null;
    field: string |null;
    courses: [{
      courseId: number;
      courseName: string;
      trailer: string | null;
      catergory: string;
    }] |null
  } | null;
}
const initialState: MasterState = {
  Masters: [
    {
      id:1,
      Name: "حشمت مشتاق",
      username: "HM",
      phoneNumber: "09123333333",
      imgMaster: "Teachers1.png",
      intro: "براي همه كساني كه به طراحي و مدل سازي براي يك محصول علاقه دارند ، توجه داشته باشيد كه ابزار هاي نرم افزار هاي گرافيكي نيازبه سخت افزار هاي قوي براي اجرا دارند .",
      followers: "200",
      courseCount:"50",
      field: "طراح گرافیک",
      courses: [
       { courseId: uuidv4(),
          courseName: "آموزش مقدماتي تا پيشرفته نرم افزار Adobe Photoshop",
          trailer: "https://hw19.cdn.asset.aparat.com/aparat-video/4309a08d38f724c55f11606848e81bb613949011-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjI3OTYwNDMwNGU1MzQwZDc0OWQ5NDY5MWEyZWU1YmZhIiwiZXhwIjoxNjc2NzIwNTEwLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.kbqWUTmF6ueFGEupuO3tgkf9HSygFnLOCrT8XZsuRtw",
          catergory: "فتوشاپ"
          
        },
        {
          courseId :uuidv4(),
          courseName: "آموزش مقدماتي نرم افزار Adobe Illustartor",
          trailer: "https://hw17.cdn.asset.aparat.com/aparat-video/441c25474fd126f5639c48d2a6aaf8fb11680807-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjY4NTNjYTlhZDJmNjY0NWMwYzBmYmVjMGYzODEyNjg4IiwiZXhwIjoxNjc2NzIwNTkwLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.QjCElhqoVqNbeCokkRqcsDEEPGDvl1mNErHdalt4JoI",
          catergory: "ایلاستریتور"
        },{
          courseId :uuidv4(),
          courseName: "آموزش پيشرفته  نرم افزار Adobe Illustartor",
          trailer: "https://aspb12.cdn.asset.aparat.com/aparat-video/027218fe4f87149b985f296e785d4c3c14510687-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImUxMDhlODU5NDMxNjI1YTVjMGI3ZTViOGRhY2Q2NDVkIiwiZXhwIjoxNjc2NzIwNjMyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.PV-VSA6uOfJvmYzylXMBtoXp3nOLJjNkAVcxUnkyess",
          catergory: "ایلاستریتور"
        },

      ]
    },
  ],
  CurrentMaster: null,
};

export const MastersSlice = createSlice({
  name: "masters",
  initialState,
  reducers: {
    signUpMaster: (state, action) => {
      state.Masters.push({
        id:Math.floor(Math.random() * 1000 - 1) + 1,
        Name:null,
        username: action.payload.username,
        phoneNumber: action.payload.phoneNumber,
        imgMaster:null,
        intro: null,
        followers: null,
        courseCount: null,
        field: null,
        courses: null
      });
      console.log(action.payload)
    },
    loginMaster: (state, action) => {
      const findMaster: any = state.Masters.filter((master) => {
        return master.phoneNumber===action.payload
      });
      // console.log(findMaster)
      if (findMaster.length === 0) {
        alert("استاد با این مشخصات وجود ندارد")
      }
      else {
        state.CurrentMaster = findMaster
        // console.log(state.CurrentMaster)
      }
    },
    editMaster: (state, action) => {
      
    }
  }

});
export const { signUpMaster,loginMaster } = MastersSlice.actions;

export default MastersSlice.reducer;
