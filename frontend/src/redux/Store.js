import {legacy_createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import authReducer from "./auth/auth.reducer";
import productReducers from "./product/product.reducer";

const rootReducer = combineReducers({
    auth:authReducer,
    product:productReducers
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))