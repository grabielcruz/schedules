import { configureStore } from "@reduxjs/toolkit";
import gradesSlice from "./features/gradesSlice";

const store = configureStore({
  reducer: {
    Grades: gradesSlice
  }
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch