// libraries
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
// reducers
import sessionReducer from '../screens/session/session.reducers'
import adminReducer from '../screens/admin/admin.reducers'

// console.log('root reducer')
const rootReducer = (history) => combineReducers({
    session: sessionReducer,
    admin: adminReducer,
    router: connectRouter(history),
})

export default rootReducer