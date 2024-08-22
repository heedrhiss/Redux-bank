import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomerSlice";

const rootReducer = combineReducers({
    accountReducer,
    customerReducer
})
const store = createStore(rootReducer);


export default store;

