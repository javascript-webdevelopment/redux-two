// Initial State
const initialState = {
    user: {},
    loading: false,
    errorMessage: ''
};

// Action Types
const GET_USER = 'GET_USER';


// Action Builder
export function getRandomUser(){
    const randomUser = axios.get('https://randomuser.me/api/').then((res) => res.data.results[0]).catch(error => error.message);

    const action = {
        type: GET_USER,
        payload: randomUser
    };

    return action;
}

// Reducer Function
export default function userReducer(state = initialState, action){
    switch(action.type){
        case GET_USER + '_PENDING':
            return Object.assign({}, state, {laoding: true});
        case GET_USER + '_FULFILLED':
                return Object.assign({}, state, {user: action.payload, loading: false});
        case GET_USER + '_REJECTED':
            return Object.assign({}, state, {errorMessage: action.payload});
        default:
            return state;
    };
};