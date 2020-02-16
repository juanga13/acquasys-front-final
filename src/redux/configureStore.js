import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './rootReducer'

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import sessionMiddleware from '../screens/session/session.middleware'

import adminMiddleware from '../screens/admin/admin.middleware'
import adminStudentsMiddleware from '../screens/admin/Students/students.middleware'
import adminTeachersMiddleware from '../screens/admin/Teachers/teachers.middleware'
import studentMiddleware from "../screens/student/student.middleware";
// import adminLessonsMiddleware from '../screens/admin/Lessons/lessons.middleware'
// import adminPaymentsMiddleware from '../screens/admin/Payments/payments.middleware'

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
            studentMiddleware,
            routerMiddleware(history),
        ),
    )

    return store
}