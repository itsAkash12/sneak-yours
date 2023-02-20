import Cookies from 'universal-cookie';
import { ADD_TO_CART_ERROR, CLEAR_ERRORS_CART, DEC_QUANTITY, DELETE_CART, ERRORS_GET, GET_CART, INC_QUANTITY, LOADING_CART, QUANTITY_ERROR, QUANTITY_SUCCESS } from './cart.types';
const cookies = new Cookies();
const token = cookies.get("jwtoken") || null;

export const loadingCart = ()=> ({type:LOADING_CART});
export const clearError = ()=> ({type:CLEAR_ERRORS_CART});

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

export const addToCart = (prodId)=> async(dispatch)=> {
    try {
        let res = await fetch(`${process.env.REACT_APP_BASEURL}carts/create/${prodId}`,{
            method:"POST",
            headers:{
                "authorization":token
            }
        })
        let data = await res.json();
        if(data.message=="failed"){
            return dispatch({type:ADD_TO_CART_ERROR, payload:data.description})
        }
        else{
            return dispatch({type:INC_QUANTITY, payload:data.description});
        }
    } catch (error) {
        return dispatch({type:ADD_TO_CART_ERROR, payload:error.message})
    }
}

export const deleteCart = (prodId)=> async(dispatch)=> {
    console.log(token)
    try {
        let res = await fetch(`${process.env.REACT_APP_BASEURL}carts/delete/${prodId}`,{
            method:"DELETE",
            headers:{
                "authorization":token
            }
        })
        let data = await res.json();
        if(data.message=="failed"){
            return dispatch({type:ADD_TO_CART_ERROR, payload:data.description})
        }
        else{
            return dispatch({type:DELETE_CART, payload:data.description});
        }
    } catch (error) {
        return dispatch({type:ADD_TO_CART_ERROR, payload:error.message})
    }
}

export const increaseQuantity = (cartId)=> async(dispatch)=> {
    try {
        let res = await fetch(`${process.env.REACT_APP_BASEURL}carts/quantity/inc/${cartId}`,{
            method:"PATCH",
            headers:{
                "authorization":token
            }
        })
        let data = await res.json();
        if(data.message=="failed"){
            return dispatch({type:QUANTITY_ERROR, payload:data.description})
        }
        else{
            return dispatch({type:INC_QUANTITY, payload:data.description});
        }
    } catch (error) {
        return dispatch({type:QUANTITY_ERROR, payload:error.message})
    }
}

export const decreaseQuantity = (cartId)=> async(dispatch)=> {
    try {
        let res = await fetch(`${process.env.REACT_APP_BASEURL}carts/quantity/dec/${cartId}`,{
            method:"PATCH",
            headers:{
                "authorization":token
            }
        })
        let data = await res.json();
        if(data.message=="failed"){
            return dispatch({type:QUANTITY_ERROR, payload:data.description})
        }
        else{
            return dispatch({type:DEC_QUANTITY, payload:data.description});
        }
    } catch (error) {
        return dispatch({type:QUANTITY_ERROR, payload:error.message})
    }
}

