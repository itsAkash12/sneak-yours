import Cookies from "universal-cookie"
import { FAILURE_ORDERS_HISTORY, REQUEST_ORDERS_HISTORY, SUCCESS_ORDERS_HISTORY } from "./order.types";
const cookies = new Cookies();

const getOrderHistory = ()=> (dispatch)=> {
    try {
        
    } catch (error) {
        
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