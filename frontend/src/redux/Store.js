import {legacy_createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import authReducer from "./auth/auth.reducer";
import productReducers from "./product/product.reducer";
import cartReducer from "./cart/cart.reducer";
import wishlistReducer from "./wishlist/wishlist.reducer"
import shippingReducer from "./shippingDetails/shipping.reducer";
import orderReducer from "./order/order.reducer";

const rootReducer = combineReducers({
    auth:authReducer,
    product:productReducers,
    cart:cartReducer,
    wishlist:wishlistReducer,
    shipping:shippingReducer,
    order:orderReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))