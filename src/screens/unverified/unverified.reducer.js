import {
    GET_STUDENT_PROFILE,
    GET_STUDENT_PROFILE_ERROR,
    GET_STUDENT_PROFILE_RESPONSE
} from './unverified.actions'
import { NONE, LOADING, ERROR, SUCCESS } from '../../utils/requestStates'
import { LOGOUT } from '../session/session.actions'

const initialState = {
    studentProfile: null,
    getStudentProfileStatus: NONE,
    editProfileStatus: NONE,
}

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        /* Get students */
        case GET_STUDENT_PROFILE: return { ...state, getStudentProfileStatus: LOADING }
        case GET_STUDENT_PROFILE_RESPONSE: return { ...state, getStudentProfileStatus: SUCCESS, studentProfile: action.response }
        case GET_STUDENT_PROFILE_ERROR: return { ...state, getStudentProfileStatus: ERROR, studentProfile: action.response }

        /* Logout */
        case LOGOUT: return initialState

        default:
            return state
    }
}

export default sessionReducer