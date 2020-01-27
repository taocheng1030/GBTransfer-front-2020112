import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware"
import reducers from './reducers';
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
