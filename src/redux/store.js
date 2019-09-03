// Bring combine reducers
import {createStore, applyMiddleware, combineReducers} from 'redux';
import userReducer from './reducer';
import promiseMiddleware from 'redux-promise-middleware';

// Create the root reducer
const rootReducer = combineReducers({
    userReducer
});

// Pass in the root reducer
export default createStore(rootReducer, applyMiddleware(promiseMiddleware));