import { REMOVE_TODO } from "../constants/actions_type";

const initialState = [
];

export const listReducer = (state = initialState, action) => {
  if (action.type === REMOVE_TODO) {
    return [
      ...state.filter(el => el.id !== action.payload.id)
    ]
  }

  return state;
};
