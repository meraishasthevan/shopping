import {createStore} from 'redux';
import rootReducer from './Reducer/main';

const store=createStore(rootReducer)
export default store;
