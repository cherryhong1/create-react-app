import {createStore,applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer.js';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware))
const store = createStore(reducer,enhancer);

export default store;
