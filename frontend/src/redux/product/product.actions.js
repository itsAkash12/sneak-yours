import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCTS, LOADING_PRODUCTS, NEXT_PRODUCTS, PREV_PRODUCTS,  } from "./product.types";


export const setLoading=()=>({type:LOADING_PRODUCTS})
export const setNextPage=(payload = 1)=>({type:NEXT_PRODUCTS, payload})
export const setPrevPage=(payload = 1)=>({type:PREV_PRODUCTS, payload})


export const getProducts = (page)=> async(dispatch)=> {
    dispatch(setLoading({type:LOADING_PRODUCTS}));
    try {
        let res = await fetch(`${process.env.REACT_APP_BASEURL}products?page=${page}`);
        let data = await res.json();
        return dispatch({type:GET_PRODUCTS, payload:data})
    } catch (error) {
        return error
    }
}