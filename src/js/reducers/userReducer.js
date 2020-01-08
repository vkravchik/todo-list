import { GET_USER_LIST } from "../constants/actions_type";

const initialState = [
];

export const userReducer = (state = initialState, action) => {
  if (action.type === GET_USER_LIST) {
    return [
      ...state, action.payload
    ]
  }

  return state;
};
