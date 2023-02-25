import {
  CLEAR_ERRORS,
  FAILURE_ORDERS_HISTORY,
  GET_ORDERS_HISTORY,
  ORDERS_HISTORY_ERRORS,
  REQUEST_ORDERS_HISTORY,
  SUCCESS_ORDERS_HISTORY,
} from "./order.types";

const initialState = {
  ordersHistory: [],
  isLoading: false,
  message: "",
  isError: false,
  isSuccess: false,
};

const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_ORDERS_HISTORY: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SUCCESS_ORDERS_HISTORY: {
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        message: payload
      };
    }
    case FAILURE_ORDERS_HISTORY: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message:payload
      };
    }
    case GET_ORDERS_HISTORY:{
      return {
        ...state,
        isLoading:false,
        ordersHistory:payload
      }
    }
    case ORDERS_HISTORY_ERRORS:{
      return {
        ...state,
        isLoading:false,
        isError:true,
        message:payload
      }
    }
    case CLEAR_ERRORS:{
      return{
        ...state,
        isError:false,
        isSuccess:false,
        message:null
    }
    }
    default: {
      return state;
    }
  }
};

export default orderReducer;
