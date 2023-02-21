import { ADD_TO_CART, ADD_TO_CART_ERROR, CLEAR_ERRORS, DEC_QUANTITY, DELETE_CART, ERRORS_GET, FUNCTION_CART_CLEAR, GET_CART, INC_QUANTITY, LOADING_CART, QUANTITY_ERROR } from "./cart.types";

const initialState = {
    carts:[],
    cartCount:'',
    isLoading:false,
    message:"",
    isError:false,
    isSuccess:false,
    funcError:false,
    funcSuccess:false,
    funcMessage:""
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
                carts:payload.cart,
                cartCount:payload.cartCount,
                isLoading:false,
            }
        }
        case ERRORS_GET:{
            return{
                isLoading:false,
                isError:true,
                message:payload
            }
        }
        case ADD_TO_CART:{
            return{
                ...state,
                isSuccess:true,
                isError:false,
                message:payload,
                
            }
        }
        case ADD_TO_CART_ERROR:{
            return{
                ...state,
                isSuccess:false,
                isError:true,
                message:payload
            }
        }
        case INC_QUANTITY:{
            return{
                ...state,
                funcSuccess:true,
                funcMessage:payload
            }
        }
        case DEC_QUANTITY:{
            return{
                ...state,
                funcSuccess:true,
                funcMessage:payload
            }
        }
        case QUANTITY_ERROR:{
            return{
                ...state,
                funcError:true,
                funcMessage:payload
            }
        }
        case DELETE_CART:{
            return{
                ...state,
                funcSuccess:true,
                funcMessage:payload
            }
        }
        case FUNCTION_CART_CLEAR:{
            return{
                ...state,
                funcSuccess:false,
                funcError:false,
                funcMessage:null
            }
        }
        case CLEAR_ERRORS:{
            return{
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

export default cartReducer;