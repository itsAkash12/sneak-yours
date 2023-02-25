import Cookies from "universal-cookie"
import { CLEAR_ERRORS, FAILURE_ORDERS_HISTORY, GET_ORDERS_HISTORY, ORDERS_HISTORY_ERRORS, REQUEST_ORDERS_HISTORY, SUCCESS_ORDERS_HISTORY } from "./order.types";
const cookies = new Cookies();

export const getOrderHistory = ()=> async(dispatch)=> {
    const token = cookies.get("jwtoken") || null;
    dispatch({type:REQUEST_ORDERS_HISTORY})
    try {
        let res = await fetch(`${process.env.REACT_APP_BASEURL}orders/my/order`,{
            headers:{
                "authorization":token
            }
        })
        let data = await res.json();
        if(data.message=="failed"){
            dispatch({type:ORDERS_HISTORY_ERRORS, payload:data.description})
            dispatch(clearErrors());
        }
        else{
            dispatch({type:GET_ORDERS_HISTORY, payload:data});
        }
    } catch (error) {
        dispatch({type:ORDERS_HISTORY_ERRORS, payload:error.message})
        dispatch(clearErrors());
    }
}

export const createOrderHistory = ()=> async(dispatch)=> {
    dispatch({type:REQUEST_ORDERS_HISTORY})
    const token = cookies.get("jwtoken") || null;
    console.log(token);
    const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"))
    try {
        let res = await fetch(`${process.env.REACT_APP_BASEURL}orders/create`,{
            method:"POST",
            headers:{
                authorization:token,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(shippingInfo)
        })
        let result = await res.json();
        if(result.message=="failed"){
            dispatch({type:FAILURE_ORDERS_HISTORY, payload:result.description})
        }else{
            dispatch({type:SUCCESS_ORDERS_HISTORY, payload:result.description})
        }
    } catch (error) {
        dispatch({type:FAILURE_ORDERS_HISTORY, payload:error.message})
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};