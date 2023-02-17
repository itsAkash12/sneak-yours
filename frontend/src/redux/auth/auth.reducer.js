import { SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./auth.actionTypes"


const initialState={
    isAuth:false,
    token:"",
    isLoading:false,
    message:"",
    isError:false,
    isSuccess:false
}
const authReducer = (state = initialState, {type, payload})=> {
    switch (type) {
        case SIGNUP_REQUEST:{
            return {
                ...state, isLoading:true
            }
        }
        case SIGNUP_SUCCESS:{
            return {
                ...state, isLoading:false
            }
        }
        default:{
            return state
        }
    }
}

export default authReducer;