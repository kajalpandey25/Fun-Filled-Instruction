import {  combineReducers, createStore } from 'redux';
import TodoReducer from './reducers/TodoReducer';


const reducer = combineReducers({ todos: TodoReducer});
const store = createStore(reducer, {}, window_REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_());


export default store;