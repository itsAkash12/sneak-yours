import { INFO_SHIPPING, LOADING_SHIPPING } from "./shipping.types"


const initialState = {
    shippingInfo:{},
    isLoading:false,
    isSuccess:false
}

const shippingReducer = (state = initialState, {type,payload})=> {
    switch (type) {
        case LOADING_SHIPPING:{
            return{
                isLoading:true
            }
        }
        case INFO_SHIPPING:{
            return{
                shippingInfo:payload,
                isLoading:false,
                isSuccess:true
            }
        }

        default:{
            return state
        }
    }
}

export default shippingReducer;