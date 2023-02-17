import { createSlice } from "@reduxjs/toolkit";

interface MasterState {
  Masters: [
    {
      Name: string|null;
      username: string;
      phoneNumber: string;
      imgMaster: string | null;
      intro: string | null;
      followers: string | null;
      courseCount: string | null;
    }
  ];
  CurrentMaster: {
    Name: string|null;
    username: string;
    phoneNumber: string;
    imgMaster: string | null;
    intro: string | null;
    followers: string | null;
    courseCount: string | null;
  } | null;
}
const initialState: MasterState = {
  Masters: [
    {
      Name: "حشمت مشتاق",
      username: "HM",
      phoneNumber: "09123333333",
      imgMaster: null,
      intro: null,
      followers: null,
      courseCount: null,
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
        Name:null,
        username: action.payload.username,
        phoneNumber: action.payload.phoneNumber,
        imgMaster: null,
        intro: null,
        followers: null,
        courseCount: null,
      });
      console.log(action.payload)
    },
    loginMaster: (state, action) => {
      const findMaster: any = state.Masters.filter((master) => {
        return master.phoneNumber===action.payload
      });
      console.log(findMaster)
      if (findMaster.length=== 0) {
        alert("استاد با این مشخصات وجود ندارد")
      }
      else {
        state.CurrentMaster = findMaster
        console.log(state.CurrentMaster)
      }
    },
    editMaster: (state, action) => {
      
    }
  }

});
export const { signUpMaster,loginMaster } = MastersSlice.actions;

export default MastersSlice.reducer;
