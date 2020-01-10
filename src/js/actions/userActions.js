import { getUserList } from "../services/userService";
import { GET_USER_LIST, REMOVE_USER_ITEM } from "../constants/actions_type";

export const getUsersAction = () => (dispatch) => {
  getUserList()
    .then(data => {
      dispatch({type: GET_USER_LIST, payload: data.data})
    });
};

export const removeUserAction = (payload) => (
  {type: REMOVE_USER_ITEM, payload}
);
