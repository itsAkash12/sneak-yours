import { CLEAR_SEARCH, GET_PRODUCTS, LOADING_PRODUCTS, NEXT_PRODUCTS, PREV_PRODUCTS, SEARCH_BY_VALUE, SINGLE_PRODUCTS,  } from "./product.types"

const initialState = {
    products:[],
    loading:false,
    page:1,
    singleProduct:[],
    searchByValue:"",
    productCount:"",
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
                products:payload.product,
                productCount:payload.productCount,
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
        case SEARCH_BY_VALUE:{
            return {
                ...state,
                searchByValue:payload
            }
        }
        case CLEAR_SEARCH:{
            return {
                ...state,
                searchByValue:null
            }
        }
        default:{
            return state
        }
    }
}

export default productReducer;