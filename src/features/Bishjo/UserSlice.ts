import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  users: [
    {
      id: number;
      username: string;
      email: string;
      phone: string;
      password: string;
      image: string | null;
      eshterak: number;
    }
  ];
  currentUser: {
    id: number;
    username: string;
    email: string;
    phone: string;
    password: string;
    image: string | null;
    eshterak: number;
  } | null;
}

const initialState: UserState = {
  users: [
    {
      id: 1,
      username: "ndz",
      email: "ndz@gmail.com",
      phone: "091211111111",
      password: "1111",
      image: "User1.jpg",
      eshterak: 0,
    },
  ],
  currentUser: null,
};

export const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    signupUser: (state, action) => {
      // = state.users.map((item: any, index: any) => { item.id = index });

      // // console.log(userID)
      // if (state.users.length > 0) {
      //   return userID = userID++
      // }

      state.users.push({
        id: Math.floor(Math.random() * 1000 - 1) + 1,
        username: action.payload.username,
        email: action.payload.email,
        phone: action.payload.phone,
        password: action.payload.password,
        image: null,
        eshterak: 0,
      });
      state.users.map((item: any) => {
        return console.log(item.id);
      });
      console.log(action.payload);
    },
    loginUser: (state, action) => {
      const findUSer: any = state.users.filter((user) => {
        return (
          (user.username === action.payload.username ||
            user.email === action.payload.email ||
            user.phone === action.payload.phone) &&
          user.password === action.payload.password
        );
      });

      // console.log(findUSer)
      if (findUSer.length === 0) {
        alert("نام کاربری یا ایمیل یا شماره تلفن یا رمز عبور اشتباه است ");
      } else {
        // alert("خوش آمدید");
        state.currentUser = findUSer;
      }
      // console.log(state.currentUser);
    },
    editUser: (state, action) => {
      // state.users.findIndex((item: any) => console.log(action.payload.userInfo) );
   
        
        const USerIndex = state.users.findIndex(
          (item: any) => item.id === action.payload.user.id
        );

        // console.log(USerIndex);

        state.users[USerIndex].username = action.payload.username;
        state.users[USerIndex].password = action.payload.password;
        state.users[USerIndex].email = action.payload.email;
        state.currentUser = state.users[USerIndex];
        // console.log(state.currentUser);
   
    },

    userLogOut: (state) => {
      state.currentUser=null
    }
  },
});

// Action creators are generated for each case reducer function
export const { signupUser, loginUser, editUser,userLogOut } = UserSlice.actions;

export default UserSlice.reducer;
