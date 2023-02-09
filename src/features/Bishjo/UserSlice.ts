import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState{ 
  users: users[];
}

interface users {
 
  username: string,
  email: string,
  phone: string,
  password:string,
}

const initialState: UserState={
  users:[]
}

export const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    signupUser: (state, action) => {
      state.users.push({
        username: action.payload.username,
        email: action.payload.email,
        phone: action.payload.phone,
        password:action.payload.password
      })
      console.log(action.payload)
      
    }
  }

})

// Action creators are generated for each case reducer function
export const {signupUser} = UserSlice.actions

export default UserSlice.reducer