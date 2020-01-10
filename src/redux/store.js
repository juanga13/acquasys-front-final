import { createBrowserHistory } from 'history'
import {applyMiddleware, compose, createStore} from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import thunk from 'redux-thunk'
import logger from 'redux-logger';

import reducer from "./reducers";

// middlewares


const history = createBrowserHistory();

const aRouterMiddleware = routerMiddleware(history);

const store = process.env.NODE_ENV === 'production' ? createStore(
    connectRouter(history)(reducer),
    undefined,
    compose(applyMiddleware(
        /* middleware compose */
        thunk, 
        aRouterMiddleware,
    ))
) : createStore(
    connectRouter(history)(reducer),
    undefined,
    compose(applyMiddleware(
        /* middleware compose */
        thunk, 
        logger,  // only in dev
    ))
);

export default {store, history};