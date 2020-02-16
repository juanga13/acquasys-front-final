import {
    GET_LESSONS,
    GET_LESSONS_RESPONSE,
    GET_LESSONS_ERROR,
    GET_ATTENDANCES,
    GET_ATTENDANCES_RESPONSE,
    GET_ATTENDANCES_ERROR,
} from './teacher.actions'
import { NONE, LOADING, SUCCESS, ERROR } from '../../utils/requestStates'

const initialState = {
    lessons: [],
    attendances: [],

    lessonsStatus: NONE,
    attendancesStatus: NONE,
}

const teacherReducer = (state = initialState, action) => {
    switch(action.type) {
        /** Get lessons */
        case GET_LESSONS: return {...state, lessonsStatus: LOADING}
        case GET_LESSONS_RESPONSE: return {...state, lessonsStatus: SUCCESS, lessons: action.response}
        case GET_LESSONS_ERROR: return {...state, lessonsStatus: ERROR}
        
        /** Get attendances */
        case GET_ATTENDANCES: return {...state, attendancesStatus: LOADING}
        case GET_ATTENDANCES_RESPONSE: return {...state, attendancesStatus: SUCCESS, attendances: action.response}
        case GET_ATTENDANCES_ERROR: return {...state, attendancesStatus: ERROR}
        
        default: return state;
    }
}

export default teacherReducer