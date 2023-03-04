import { createSlice } from "@reduxjs/toolkit";
const { v4: uuidv4 } = require('uuid');





interface MasterState {
  Masters: 
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
    about: string | null;
    Profileimg: string | null;
  }[],
  CurrentMaster: {
    id: number;
    Name: string|null;
    username: string;
    phoneNumber: string;
    imgMaster: string | null;
    intro: string | null;
    followers: string | null;
    courseCount: string | null;
    field: string | null;
    about: string|null;
    Profileimg: string | null;


  } | null;
}
const initialState: MasterState = {
  Masters: [
    {
      id: 1,
      Name: "چنگیز مرادی",
      username: "HM",
      phoneNumber: "09123333333",
      imgMaster: "Teachers1.png",
      intro: "براي همه كساني كه به طراحي و مدل سازي براي يك محصول علاقه دارند ، توجه داشته باشيد كه ابزار هاي نرم افزار هاي گرافيكي نيازبه سخت افزار هاي قوي براي اجرا دارند .",
      followers: "200",
      courseCount: "50",
      field: "طراح گرافیک",
      about:"بنده از سال 1388 در حوزه طراحی گرافيك فعالیت داشتم و موفق شدم در شرکت طراحي گرافيك تشتک سازان تهران طراحي گرافيك  بپردازم ",
      Profileimg: "Teacher1.png"
      
    },

    {
      id: 2,
      Name: "سکینه جعفری",
      username: "SJ",
      phoneNumber: "09122222222",
      imgMaster: "Teachers2.png",
      intro: "براي همه كساني كه به طراحي و مدل سازي براي يك محصول علاقه دارند ، توجه داشته باشيد كه ابزار هاي نرم افزار هاي گرافيكي نيازبه سخت افزار هاي قوي براي اجرا دارند .",
      followers: "200",
      courseCount: "50",
      field: "مدل سازی",
      about:"بنده از سال 1398 در حوزه طراحی 3 بعدی فعالیت داشتم و موفق شدم در شرکت بازی سازی تشتک سازان تبریز، مدل سازی کنم",
      Profileimg: "Teacher2.png"

      
    }
  ],
  CurrentMaster: null
} 
export const MastersSlice = createSlice({
  name: "masters",
  initialState,
  reducers: {
    signUpMaster: (state, action) => {
      state.Masters.push({
        id:uuidv4(),
        Name:null,
        username: action.payload.username,
        phoneNumber: action.payload.phoneNumber,
        imgMaster:null,
        intro: null,
        followers: null,
        courseCount: null,
        field: null, 
        about:null,
        Profileimg: null,

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
    showAllMaster: (state) => {
      state.Masters.map((item: any) => {
        return item
      })
    },
    // editMaster: (state, action) => {
      
    // }
  }

});
export const { signUpMaster,loginMaster,showAllMaster } = MastersSlice.actions;

export default MastersSlice.reducer;
