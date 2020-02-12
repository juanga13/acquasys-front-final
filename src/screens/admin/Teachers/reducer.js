import {
    CREATE,
    CREATE_RESPONSE,
    CREATE_ERROR,
    UPDATE,
    UPDATE_RESPONSE,
    UPDATE_ERROR,
    DELETE,
    DELETE_RESPONSE,
    DELETE_ERROR,
} from './actions'
import { NONE, LOADING, SUCCESS, ERROR } from '../../../utils/requestStates'

const initialState = {
    createStatus: NONE,
    updateStatus: NONE,
    deleteStatus: NONE,
}

const adminTeachersReducer = (state = initialState, action) => {
    switch (action.type) {
        /** Create teacher */
        case CREATE: return {...state, createStatus: LOADING}
        case CREATE_RESPONSE: return {...state, createStatus: SUCCESS}
        case CREATE_ERROR: return {...state, createStatus: ERROR}
        
        /** Update teacher */
        case UPDATE: return {...state, updateStatus: LOADING}
        case UPDATE_RESPONSE: return {...state, updateStatus: SUCCESS}
        case UPDATE_ERROR: return {...state, updateStatus: ERROR}
        
        /** Delete teacher */
        case DELETE: return {...state, deleteStatus: LOADING}
        case DELETE_RESPONSE: return {...state, deleteStatus: SUCCESS}
        case DELETE_ERROR: return {...state, deleteStatus: ERROR}


        default: return state
    }
}

export default adminTeachersReducer