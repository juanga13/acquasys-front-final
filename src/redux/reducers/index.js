// libraries
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
// reducers
import sessionReducer from './session'


const rootReducer = (history) => combineReducers({
    session: sessionReducer,
    router: connectRouter(history),
})

export default rootReducer