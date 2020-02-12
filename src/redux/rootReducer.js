// libraries
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
// reducers
import sessionReducer from '../screens/session/reducer'

import adminReducer from '../screens/admin/reducer'
import adminStudentsReducer from '../screens/admin/Students/reducer'
import adminTeachersReducer from '../screens/admin/Teachers/reducer'
// import adminLessonsReducer from '../screens/admin/Lessons/reducer'
// import adminPaymentsReducer from '../screens/admin/Payments/reducer'

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