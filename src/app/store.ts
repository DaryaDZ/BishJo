import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../features/Bishjo/UserSlice';
<<<<<<< HEAD
import CourseReducer from '../features/Bishjo/CourseSlice'
export const store = configureStore({
  reducer: {
    users: UserReducer,
    courses:CourseReducer
=======
import MastersReducer from '../features/Bishjo/MasterSlice'
export const store = configureStore({
  reducer: {
    users: UserReducer,
    masters:MastersReducer
>>>>>>> d6614044c2203727a10ed818c9d1e4b2211a0189
    
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch