import { configureStore } from "@reduxjs/toolkit";
import gradesSlice from "./features/gradesSlice";

export default configureStore({
  reducer: {
    Grades: gradesSlice
  }
})