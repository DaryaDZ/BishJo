import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState{ 
  value: users[];
}

interface users {
 
  username: string,
  email: string,
  phone: string,
  password:string,
}

const initialState: UserState={
  value:[]
}

export const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    signupUser: (state, action:PayloadAction<users>) => {
      
      state.value.push(action.payload)
      console.log(action.payload)
      
    }
  }

})

// Action creators are generated for each case reducer function
export const {signupUser} = UserSlice.actions

export default UserSlice.reducer