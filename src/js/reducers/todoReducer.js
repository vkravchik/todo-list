import { ADD_TODO, REMOVE_TODO, UPDATE_TODO_STATUS } from "../constants/actions_type";

const initialState = [
    {
        id: 1,
        title: 'Some title',
        done: false
    },
    {
        id: 2,
        title: 'Codding',
        done: true
    }
];

export const todoReducer = (state = initialState, action) => {
    if (action.type === ADD_TODO) {
        return [
            ...state, action.payload
        ]
    }

    if (action.type === REMOVE_TODO) {
        return [
            ...state.filter(el => el.id !== action.payload.id)
        ]
    }

    if (action.type === UPDATE_TODO_STATUS) {
        return [
            ...state.map(el => el.id === action.payload.id ? action.payload : el)
        ]
    }

    return state;
};
