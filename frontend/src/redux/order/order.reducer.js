import {
  FAILURE_ORDERS_HISTORY,
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
  switch (key) {
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
        ordersHistory: payload,
      };
    }
    case FAILURE_ORDERS_HISTORY: {
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        ordersHistory: payload,
      };
    }
    default: {
      return state;
    }
  }
};
