// import the store
import {createStore} from 'redux';
// import the reducer
import userReducer from './reducer';
// export the store being created
export default createStore(userReducer);