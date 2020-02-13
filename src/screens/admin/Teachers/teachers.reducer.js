import {
    CREATE_TEACHER,
    CREATE_TEACHER_RESPONSE,
    CREATE_TEACHER_ERROR,
    UPDATE_TEACHER,
    UPDATE_TEACHER_RESPONSE,
    UPDATE_TEACHER_ERROR,
    DELETE_TEACHER,
    DELETE_TEACHER_RESPONSE,
    DELETE_TEACHER_ERROR,
} from './teachers.actions'
import { NONE, LOADING, SUCCESS, ERROR } from '../../../utils/requestStates'

const initialState = {
    createTeacherStatus: NONE,
    updateTeacherStatus: NONE,
    deleteTeacherStatus: NONE,
}

const adminTeachersReducer = (state = initialState, action) => {
    switch (action.type) {
        /** Create teacher */
        case CREATE_TEACHER: return {...state, createTeacherStatus: LOADING}
        case CREATE_TEACHER_RESPONSE: return {...state, createTeacherStatus: SUCCESS}
        case CREATE_TEACHER_ERROR: return {...state, createTeacherStatus: ERROR}
        
        /** Update teacher */
        case UPDATE_TEACHER: return {...state, updateTeacherStatus: LOADING}
        case UPDATE_TEACHER_RESPONSE: return {...state, updateTeacherStatus: SUCCESS}
        case UPDATE_TEACHER_ERROR: return {...state, updateTeacherStatus: ERROR}
        
        /** Delete teacher */
        case DELETE_TEACHER: return {...state, deleteTeacherStatus: LOADING}
        case DELETE_TEACHER_RESPONSE: return {...state, deleteTeacherStatus: SUCCESS}
        case DELETE_TEACHER_ERROR: return {...state, deleteTeacherStatus: ERROR}


        default: return state
    }
}

export default adminTeachersReducer