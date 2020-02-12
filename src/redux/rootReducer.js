// libraries
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
// reducers
import sessionReducer from '../screens/session/session.reducer'

import adminReducer from '../screens/admin/admin.reducer'
import adminStudentsReducer from '../screens/admin/Students/students.reducer'
import adminTeachersReducer from '../screens/admin/Teachers/teachers.reducer'
// import adminLessonsReducer from '../screens/admin/Lessons/lessons.reducer'
// import adminPaymentsReducer from '../screens/admin/Payments/payments.reducer'

// console.log('root reducer')
const rootReducer = (history) => combineReducers({
    session: sessionReducer,
    admin: combineReducers({
        main: adminReducer,
        students: adminStudentsReducer,
        teachers: adminTeachersReducer,
        // lessons: adminLessonsReducer,
        // payments: adminPaymentsReducer,
    }),
    router: connectRouter(history),
})

export default rootReducer