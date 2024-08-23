// Using pure redux features

import { thunk } from "redux-thunk"; 
import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomerSlice";

const rootReducer = combineReducers({
    accountReducer,
    customerReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;

