import { combineReducers } from "redux"
import { todoReducer } from './todoReducer'
import { userReducer } from "./userReducer";
import { listReducer } from "./listReducer";
import { routerReducer } from "react-router-redux";

export default combineReducers({
    routing: routerReducer,
    todoReducer,
    userReducer,
    listReducer,
});
