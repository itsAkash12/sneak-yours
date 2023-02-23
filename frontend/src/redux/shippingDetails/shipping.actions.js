import { INFO_SHIPPING, LOADING_SHIPPING } from "./shipping.types";

export const getShippingDetails = (payload)=> ({type:INFO_SHIPPING, payload})
export const setShippingLoading = ()=> ({type:LOADING_SHIPPING})