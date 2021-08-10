import { createSlice } from "@reduxjs/toolkit";
import { Grade } from "../../types";

const initialState: Grade[] = [];

export const gradesSlice = createSlice({
  name: "grades",
  initialState,
  reducers: {},
});

export default gradesSlice.reducer