import { CLEAR_ERRORS, ERROR_AUTH, LOADING_AUTH, LOGIN_AUTH, SIGNUP_AUTH } from "./auth.actionTypes"
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const token = cookies.get("jwtoken")


const initialState={
    isAuth:false,
    token: token || "",
    isLoading:false,
    message:"",
    isError:false,
    isSuccess:false
}
const authReducer = (state = initialState, {type, payload})=> {
    switch (type) {
        case LOADING_AUTH:{
            return {
                ...state,
                isLoading:true
            }
        }
        case SIGNUP_AUTH:
        case LOGIN_AUTH:{
            cookies.set('jwtoken', payload.token);
            cookies.set('role', payload.user.role);
            cookies.set('name', payload.user.firstname);
            return {
                ...state,
                isLoading:false,
                isSuccess:true,
                isAuth:true,
                message:payload.description,
                token:payload.token
            }
        }
        case ERROR_AUTH:{
            return {
                ...state,
                isLoading:false,
                message:payload,
                isError:true
            }
        }
        case CLEAR_ERRORS:{
            return {
                ...state,
                isError:false,
                isSuccess:false,
                message:null
            }
        }
        default:{
            return state
        }
    }
}

export default authReducer;