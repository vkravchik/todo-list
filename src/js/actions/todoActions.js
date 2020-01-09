import { ADD_TODO, GET_USER_LIST, REMOVE_TODO, UPDATE_TODO_STATUS } from "../constants/actions_type";
import { getUserList } from "../services/userService";

export const addTodo = (payload) => (
  {type: ADD_TODO, payload}
);

export const removeTodo = (payload) => (
  {type: REMOVE_TODO, payload}
);

export const updateTodoStatus = (payload) => (
  {type: UPDATE_TODO_STATUS, payload}
);

export const getUsersAction = () => (dispatch) => {
  getUserList().then(data => {
    const res = data.data;
    dispatch({type: GET_USER_LIST, payload: res})
  });
};
