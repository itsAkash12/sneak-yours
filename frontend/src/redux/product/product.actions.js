import { useDispatch } from "react-redux";
import { GET_PRODUCTS, LOADING_PRODUCTS } from "./product.types";


export const setLoading=()=>({type:LOADING_PRODUCTS})


export const getProducts = ()=> async(dispatch)=> {
    dispatch(setLoading({type:LOADING_PRODUCTS}));
    try {
        let res = await fetch(`${process.env.REACT_APP_BASEURL}products`);
        let data = await res.json();
        return dispatch({type:GET_PRODUCTS, payload:data})
    } catch (error) {
        return error
    }
}