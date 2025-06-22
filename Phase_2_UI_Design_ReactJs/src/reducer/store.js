import { createStore, combineReducers } from "redux";
import rootReducer from "./rootReducer";
import dataReducer from "./dataReducer";

const reducer = combineReducers({
    rootReducer, 
    dataReducer
});

export const store = createStore(reducer);