import { CLEAR_ERRORS_CART, ERRORS_GET, GET_CART, LOADING_CART } from "./cart.types";

const initialState = {
    carts:[],
    isLoading:false,
    isError:false,
    isSuccess:false,
    message:null
}

const cartReducer = (state=initialState, {type,payload})=> {
    switch (type) {
        case LOADING_CART:{
            return{
                isLoading:true
            }
        }
        case GET_CART:{
            return{
                ...state,
                carts:payload,
                isLoading:false,
                isSuccess:true,
                message:payload
            }
        }
        case ERRORS_GET:{
            return{
                isLoading:false,
                isError:true,
                message:payload
            }
        }
        case CLEAR_ERRORS_CART:{
            return{
                message:null
            }
        }
                
        default:{
            return state
        }
    }
}

export default cartReducer;