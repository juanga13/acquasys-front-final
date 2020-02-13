import {
    CREATE_STUDENT,
    CREATE_STUDENT_RESPONSE,
    CREATE_STUDENT_ERROR,
    UPDATE_STUDENT,
    UPDATE_STUDENT_RESPONSE,
    UPDATE_STUDENT_ERROR,
    DELETE_STUDENT,
    DELETE_STUDENT_RESPONSE,
    DELETE_STUDENT_ERROR,
    VERIFY_STUDENT,
    VERIFY_STUDENT_RESPONSE,
    VERIFY_STUDENT_ERROR
} from './students.actions'
import { NONE, LOADING, SUCCESS, ERROR } from '../../../utils/requestStates'

const initialState = {
    createStudentStatus: NONE,
    updateStudentStatus: NONE,
    deleteStudentStatus: NONE,
    verifyStudentStatus: NONE,
}

const adminStudentsReducer = (state = initialState, action) => {
    switch (action.type) {
        /** Create student */
        case CREATE_STUDENT: return {...state, createStudentStatus: LOADING}
        case CREATE_STUDENT_RESPONSE: return {...state, createStudentStatus: SUCCESS}
        case CREATE_STUDENT_ERROR: return {...state, createStudentStatus: ERROR}
        
        /** Update student */
        case UPDATE_STUDENT: return {...state, updateStudentStatus: LOADING}
        case UPDATE_STUDENT_RESPONSE: return {...state, updateStudentStatus: SUCCESS}
        case UPDATE_STUDENT_ERROR: return {...state, updateStudentStatus: ERROR}
        
        /** Delete student */
        case DELETE_STUDENT: return {...state, deleteStudentStatus: LOADING}
        case DELETE_STUDENT_RESPONSE: return {...state, deleteStudentStatus: SUCCESS}
        case DELETE_STUDENT_ERROR: return {...state, deleteStudentStatus: ERROR}
        
        /** Verify student */
        case VERIFY_STUDENT: return {...state, verifyStudentStatus: LOADING}
        case VERIFY_STUDENT_RESPONSE: return {...state, verifyStudentStatus: SUCCESS}
        case VERIFY_STUDENT_ERROR: return {...state, verifyStudentStatus: ERROR}

        default: return state
    }
}

export default adminStudentsReducer