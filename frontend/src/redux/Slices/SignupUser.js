import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuth: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  isMessage: null,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    addUser() {},
  },
  extraReducers:{
    
  }
});

export const { addUser } = signupSlice.actions;
export default signupSlice.reducer;
