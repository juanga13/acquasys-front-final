import {

    GET_LESSONS,
    GET_LESSONS_RESPONSE,
    GET_LESSONS_ERROR,

    GET_PAYMENTS,
    GET_PAYMENTS_RESPONSE,
    GET_PAYMENTS_ERROR,

    GET_CALENDAR,
    GET_CALENDAR_ERROR,
    GET_CALENDAR_RESPONSE,

} from './student.actions'
import { NONE, LOADING, ERROR, SUCCESS } from '../../utils/requestStates'
import { LOGOUT } from '../session/session.actions'

const initialState = {
    lessons: [],
    payments: [],
    responseCalendar: [],

    getLessonsStatus: NONE,
    getPaymentsStatus: NONE,
    getCalendarStatus: NONE,
}

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {

        /* Get lessons */
        case GET_LESSONS: return { ...state, getLessonsStatus: LOADING }
        case GET_LESSONS_RESPONSE: return { ...state, getLessonsStatus: SUCCESS, lessons: action.response }
        case GET_LESSONS_ERROR: return { ...state, getLessonsStatus: ERROR, lessons: action.response }

        /* Get payments */
        case GET_PAYMENTS: return { ...state, getPaymentsStatus: LOADING }
        case GET_PAYMENTS_RESPONSE: return { ...state, getPaymentsStatus: SUCCESS, payments: action.response }
        case GET_PAYMENTS_ERROR: return { ...state, getPaymentsStatus: ERROR, payments: action.response }

        /* Get calendar */
        case GET_CALENDAR: return { ...state, getCalendarStatus: LOADING }
        case GET_CALENDAR_RESPONSE: return { ...state, getCalendarStatus: SUCCESS, responseCalendar: action.response }
        case GET_CALENDAR_ERROR: return { ...state, getCalendarStatus: ERROR, responseCalendar: action.response }

        /* Logout */
        case LOGOUT: return initialState

        default:
            return state
    }
}

export default sessionReducer