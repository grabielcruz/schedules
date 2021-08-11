import { createSlice } from "@reduxjs/toolkit";
import { Grade } from "../../types";

const initialState: Grade[] = [];

export const gradesSlice = createSlice({
  name: "grades",
  initialState,
  reducers: {
    addGrade: (state, action) => {
      state.push(action.payload)
    }
  },
});

export const { addGrade } = gradesSlice.actions
 
export default gradesSlice.reducer