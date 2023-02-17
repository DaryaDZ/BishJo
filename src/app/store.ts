import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../features/Bishjo/UserSlice';
import MastersReducer from '../features/Bishjo/MasterSlice'
export const store = configureStore({
  reducer: {
    users: UserReducer,
    masters:MastersReducer
    
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch