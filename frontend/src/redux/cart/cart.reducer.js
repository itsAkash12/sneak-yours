import { ADD_TO_CART, ADD_TO_CART_ERROR, CLEAR_ERRORS_CART, DEC_QUANTITY, DELETE_CART, ERRORS_GET, GET_CART, INC_QUANTITY, LOADING_CART, QUANTITY_ERROR } from "./cart.types";

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
                ...state,
                isLoading:false,
                isError:true,
                message:payload
            }
        }
        case INC_QUANTITY:{
            return{
                ...state,
                isLoading:false,
                isSuccess:true,
                message:payload
            }
        }
        case DEC_QUANTITY:{
            return{
                ...state,
                isLoading:false,
                isSuccess:true,
                message:payload
            }
        }
        case QUANTITY_ERROR:{
            return{
                ...state,
                isLoading:false,
                isError:true,
                message:payload
            }
        }
        case ADD_TO_CART:{
            return{
                ...state,
                isSuccess:true,
                message:payload
            }
        }
        case ADD_TO_CART_ERROR:{
            return{
                ...state,
                isError:true,
                message:payload
            }
        }
        case DELETE_CART:{
            return{
                ...state,
                isSuccess:true,
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