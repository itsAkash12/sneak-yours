import {createSlice} from "@reduxjs/toolkit"

const signupSlice= createSlice({
    name:"signup",
    initialState:{
        isAuth:null,
        isError:false,
        isLoading:false,
        isSuccess:false,
        isMessage:null,
    },
    reducers:{
        addUser(){}
    }
});

export const {addUser} = signupSlice.actions;
export default signupSlice;