import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './rootReducer'

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import sessionMiddleware from '../screens/session/session.middleware'
import adminMiddleware from '../screens/admin/admin.middleware'

export const history = createBrowserHistory()
// console.log('configure store')
export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        applyMiddleware(
            thunk, 
            logger, 
            sessionMiddleware,
            adminMiddleware,
            routerMiddleware(history),
        ),
    )

    return store
}