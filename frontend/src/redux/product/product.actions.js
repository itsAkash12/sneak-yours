import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCTS, LOADING_PRODUCTS, NEXT_PRODUCTS, PREV_PRODUCTS, SINGLE_PRODUCTS,  } from "./product.types";


export const setLoading=()=>({type:LOADING_PRODUCTS})
export const setNextPage=(payload = 1)=>({type:NEXT_PRODUCTS, payload})
export const setPrevPage=(payload = 1)=>({type:PREV_PRODUCTS, payload})


export const getProducts = (page,sorting,gender,category,brand,color,minVal,maxVal)=> async(dispatch)=> {
    dispatch(setLoading({type:LOADING_PRODUCTS}));
    try {
        let res;
        res = await fetch(`${process.env.REACT_APP_BASEURL}products?page=${page}`);
        if(sorting){
            res = await fetch(`${process.env.REACT_APP_BASEURL}products?sort=${sorting}&page=${page}`);
        }
        if(gender){
            res = await fetch(`${process.env.REACT_APP_BASEURL}products?gender=${gender}&page=${page}`);
        }
        if(gender&&color){
            res = await fetch(`${process.env.REACT_APP_BASEURL}products?gender=${gender}&colors=${color}&page=${page}`);
        }
        if(gender&&color&&sorting){
            res = await fetch(`${process.env.REACT_APP_BASEURL}products?gender=${gender}&colors=${color}&page=${page}&sort=${sorting}`);
        }
        if(gender && sorting ){
            res = await fetch(`${process.env.REACT_APP_BASEURL}products?gender=${gender}&page=${page}&sort=${sorting}`)
        }
        if(category){
            res = await fetch(`${process.env.REACT_APP_BASEURL}products?category=${category}&page=${page}`);
        }
        if(category && sorting){
            res = await fetch(`${process.env.REACT_APP_BASEURL}products?category=${category}&page=${page}&sort=${sorting}`);
        }
        if(brand){
            res = await fetch(`${process.env.REACT_APP_BASEURL}products?brand=${brand}&page=${page}`);
        }
        if(brand && sorting){
            res = await fetch(`${process.env.REACT_APP_BASEURL}products?brand=${brand}&page=${page}&sort=${sorting}`);
        }
        if(color){
            res = await fetch(`${process.env.REACT_APP_BASEURL}products?colors=${color}&page=${page}`);
        }
        if(color && sorting){
            res = await fetch(`${process.env.REACT_APP_BASEURL}products?colors=${color}&page=${page}&sort=${sorting}`);
        }
        if(color && brand){
            res = await fetch(`${process.env.REACT_APP_BASEURL}products?colors=${color}&brand=${brand}&page=${page}`);
        }
        if(color && brand && sorting){
            res = await fetch(`${process.env.REACT_APP_BASEURL}products?colors=${color}&brand=${brand}&page=${page}&sort=${sorting}`);
        }
        if(color && category){
            res = await fetch(`${process.env.REACT_APP_BASEURL}products?colors=${color}&category=${category}&page=${page}`);
        }
        if(color && category && sorting){
            res = await fetch(`${process.env.REACT_APP_BASEURL}products?colors=${color}&category=${category}&page=${page}&sort=${sorting}`);
        }
        if(minVal && maxVal){
            res = await fetch(`${process.env.REACT_APP_BASEURL}products?min=${minVal}&max=${maxVal}`);
        }

        let data = await res.json();
        return dispatch({type:GET_PRODUCTS, payload:data})
    } catch (error) {
        return error
    }
}

export const getSingleProduct = (id)=> async(dispatch)=> {
    dispatch(setLoading({type:LOADING_PRODUCTS}));
    try {
        let res = await fetch (`${process.env.REACT_APP_BASEURL}products/${id}`);
        let data = await res.json();
        return dispatch({type:SINGLE_PRODUCTS, payload:data})
    } catch (error) {
        return error
    }
}