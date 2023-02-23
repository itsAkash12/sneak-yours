import { ADD_TO_CART_WISHLIST, ADD_TO_WISHLIST_ERROR, CLEAR_ERRORS, DELETE_WISHLIST, FAILED_WISHLIST, REQUEST_WISHLIST, SUCCESS_WISHLIST } from "./wishlist.types"


const initialState = {
    wishlists:[],
    isLoading : false,
    isError:false,
    isSuccess:false,
    message:""
}

const wishlistReducer = (state = initialState, {type, payload})=> {
    switch (type) {
        case REQUEST_WISHLIST:{
            return {
                ...state,
                isLoading:true
            }
        }    
        case SUCCESS_WISHLIST:{
            return {
                ...state,
                wishlists:payload.wishlist,
                wishlistCount:payload.wishlistCount,
                isLoading:false,
            }
        }    
        case FAILED_WISHLIST:{
            return {
                isError:false,
                message:payload
            }
        }   
        case ADD_TO_CART_WISHLIST:{
            return {
                ...state,
                isSuccess:true,
                isError:false,
                message:payload
            }
        }    
        case ADD_TO_WISHLIST_ERROR:{
            return{
                ...state,
                isSuccess:false,
                isError:true,
                message:payload
            }
        }
        case DELETE_WISHLIST:{
            return {
                ...state,
                isSuccess:true,
                message:payload
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

export default wishlistReducer