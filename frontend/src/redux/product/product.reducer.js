import { GET_PRODUCTS, LOADING_PRODUCTS, NEXT_PRODUCTS, PREV_PRODUCTS, SINGLE_PRODUCTS,  } from "./product.types"

const initialState = {
    products:[],
    loading:false,
    page:1,
    singleProduct:[]
}

const productReducer = (state=initialState, {type,payload})=>{
    switch (type) {
        case LOADING_PRODUCTS:{
            return{
                ...state,
                loading:true
            }
        }
        case GET_PRODUCTS:{
            return{
                ...state, 
                loading:false,
                products:payload
            }
        }
        case NEXT_PRODUCTS:{
            return {
                ...state,
                page:state.page+payload
            }
        }
        case PREV_PRODUCTS:{
            return {
                ...state,
                page:state.page-payload
            }
        }
        case SINGLE_PRODUCTS:{
            return {
                ...state,
                loading:false,
                singleProduct:[payload]
            }
        }
        default:{
            return state
        }
    }
}

export default productReducer;