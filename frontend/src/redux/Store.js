import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./Slices/SignupUser";

export const store = configureStore({
    reducer:{
        signup: signupSlice.reducer
    }
})