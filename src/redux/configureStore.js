import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './rootReducer'

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import sessionMiddleware from '../screens/session/middleware'

import adminMiddleware from '../screens/admin/middleware'
import adminStudentsMiddleware from '../screens/admin/Students/middleware'
import adminTeachersMiddleware from '../screens/admin/Teachers/middleware'
// import adminLessonsMiddleware from '../screens/admin/Lessons/middleware'
// import adminPaymentsMiddleware from '../screens/admin/Payments/middleware'

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
            adminStudentsMiddleware,
            adminTeachersMiddleware,
            // adminLessonsMiddleware,
            // adminPaymentsMiddleware,
            routerMiddleware(history),
        ),
    )

    return store
}