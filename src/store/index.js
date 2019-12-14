import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {heroReducer} from '../heroes/hero-reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    heroReducer: heroReducer
});

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk, logger] // side-effec middleware

const store = createStore(rootReducer, withDevTools(applyMiddleware(...middleware)))

export default store;