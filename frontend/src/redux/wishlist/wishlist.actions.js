import {
  ADD_TO_CART_WISHLIST,
  ADD_TO_WISHLIST_ERROR,
  CLEAR_ERRORS,
  DELETE_WISHLIST,
  FAILED_WISHLIST,
  REQUEST_WISHLIST,
  SUCCESS_WISHLIST,
} from "./wishlist.types";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const getWishlist = () => async (dispatch) => {
  const token = cookies.get("jwtoken") || null;
  dispatch({ type: REQUEST_WISHLIST });
  try {
    let res = await fetch(`${process.env.REACT_APP_BASEURL}wishlists`, {
      headers: {
        authorization: token,
      },
    });
    let data = await res.json();
    if (data.message == "failed") {
      dispatch({ type: FAILED_WISHLIST, payload: data.description });
      dispatch(clearErrors());
    } else {
      dispatch({ type: SUCCESS_WISHLIST, payload: data });
    }
  } catch (error) {
    dispatch({ type: FAILED_WISHLIST, payload: error.description });
    dispatch(clearErrors());
  }
};

export const addToWishlist = (prodId) => async (dispatch) => {
  const token = cookies.get("jwtoken") || null;
  // dispatch({ type: REQUEST_WISHLIST });
  try {
    let res = await fetch(
      `${process.env.REACT_APP_BASEURL}wishlists/create/${prodId}`,
      {
        method: "POST",
        headers: {
          authorization: token,
        },
      }
    );
    let data = await res.json();
    if (data.message == "failed") {
      return dispatch({ type: ADD_TO_WISHLIST_ERROR, payload: data.description });
    } else {
      dispatch({ type: ADD_TO_CART_WISHLIST, payload: data.description });
    }
  } catch (error) {
    return dispatch({ type: ADD_TO_WISHLIST_ERROR, payload: error.message });
  }
};

export const deleteWishlist = (prodId) => async (dispatch) => {
  const token = cookies.get("jwtoken") || null;
  // dispatch({ type: REQUEST_WISHLIST });
  try {
    let res = await fetch(
      `${process.env.REACT_APP_BASEURL}wishlists/delete/${prodId}`,
      {
        method: "DELETE",
        headers: {
          authorization: token,
        },
      }
    );
    let data = await res.json();
    if (data.message == "failed") {
      return dispatch({ type: FAILED_WISHLIST, payload: data.description });
    } else {
      return dispatch({ type: DELETE_WISHLIST, payload: data.description });
    }
  } catch (error) {
    return dispatch({ type: FAILED_WISHLIST, payload: error.message });
  }
};
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
