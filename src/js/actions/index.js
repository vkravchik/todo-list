import {ADD_TODO, REMOVE_TODO, UPDATE_TODO_STATUS} from "../constants/actions_type";

export const addTodo = (payload) => (
    {type: ADD_TODO, payload}
);

export const removeTodo = (payload) => (
    {type: REMOVE_TODO, payload}
);

export const updateTodoStatus = (payload) => (
    {type: UPDATE_TODO_STATUS, payload}
);
