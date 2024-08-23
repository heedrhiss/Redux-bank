// Implimenting redux-toolkit

import { configureStore } from "@reduxjs/toolkit";
// import { thunk } from "redux-thunk"; 
// import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomerSlice";

// const rootReducer = combineReducers({
//     accountReducer,
//     customerReducer
// })

const store = configureStore({reducer: {
    accountReducer,
    customerReducer
}});


export default store;

