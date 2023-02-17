import { GET_PRODUCTS, LOADING_PRODUCTS } from "./product.types"

const initialState = {
    products:[],
    loading:false,
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
        default:{
            return state
        }
    }
}

export default productReducer;