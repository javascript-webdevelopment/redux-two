// import the store and apply middleware
import {createStore, applyMiddleware} from 'redux';
import userReducer from './reducer';
// import promise middleware
import promiseMiddleware from 'redux-promise-middleware';
export default createStore(userReducer, applyMiddleware(promiseMiddleware));