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
import studentReducer from '../screens/student/student.reducer'
import unverifiedReducer from '../screens/unverified/unverified.reducer'
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
    student: studentReducer,
    unverified: unverifiedReducer,
    router: connectRouter(history),
})

export default rootReducer