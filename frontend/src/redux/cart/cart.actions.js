import Cookies from 'universal-cookie';
import { CLEAR_ERRORS_CART, ERRORS_GET, GET_CART, LOADING_CART } from './cart.types';
const cookies = new Cookies();
const token = cookies.get("jwtoken") || null;

export const loadingCart = ()=> ({type:LOADING_CART});
export const clearEoor = ()=> ({type:CLEAR_ERRORS_CART});

export const getCart = ()=> async(dispatch)=>{
    dispatch(loadingCart({type:LOADING_CART}))
    try {
        let res = await fetch(`${process.env.REACT_APP_BASEURL}carts`,{
            headers:{
                "authorization":token
            }
        })
        let data = await res.json();
        if(data.message=="failed"){
            return dispatch({type:ERRORS_GET, payload:data.description})
        }
        else{
            return dispatch({type:GET_CART, payload:data});
        }
    } catch (error) {
        return dispatch({type:ERRORS_GET, payload:error.message})
    }
}