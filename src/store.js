// Implimenting redux-toolkit

import { configureStore } from "@reduxjs/toolkit";
// import { thunk } from "redux-thunk"; 
// import { applyMiddleware, combineReducers, createStore } from "redux";
import account from "./features/accounts/AccountSlice";
import customer from "./features/customers/CustomerSlice";

// const rootReducer = combineReducers({
//     accountReducer,
//     customerReducer
// })

const store = configureStore({reducer: {
    account,
    customer
}});


export default store;

