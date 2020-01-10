import { GET_USER_LIST, REMOVE_TODO, REMOVE_USER_ITEM } from "../constants/actions_type";

const initialState = [
];

export const userReducer = (state = initialState, action) => {
  if (action.type === GET_USER_LIST) {
    return [
      ...action.payload
    ]
  }

  if (action.type === REMOVE_USER_ITEM) {
    return [
      ...state.filter(el => el.id !== action.payload.id)
    ]
  }

  return state;
};
