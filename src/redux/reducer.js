// Initial State
const initialState = {
    user: {}
};

// Action Types
const LOGIN_USER = 'LOGIN_USER';

// Action Builders
export function loginUser(user) {
    const action = {
        type: LOGIN_USER,
        payload: user
    };
    return action;
};

// Reducer Function
export default function userReducer(state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            return Object.assign({}, state, {user: action.payload});
        default:
            return state;
    };
};