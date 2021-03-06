import {
    GET_STUDENTS,
    GET_STUDENTS_RESPONSE,
    GET_STUDENTS_ERROR,

    GET_TEACHERS,
    GET_TEACHERS_RESPONSE,
    GET_TEACHERS_ERROR,

    GET_LESSONS,
    GET_LESSONS_RESPONSE,
    GET_LESSONS_ERROR,

    GET_PAYMENTS,
    GET_PAYMENTS_RESPONSE,
    GET_PAYMENTS_ERROR,

    GET_CALENDAR,
    GET_CALENDAR_ERROR,
    GET_CALENDAR_RESPONSE,

    EDIT_LESSON,
    EDIT_LESSON_RESPONSE,
    EDIT_LESSON_ERROR,
} from './admin.actions'
import { NONE, LOADING, ERROR, SUCCESS } from '../../utils/requestStates'
import { LOGOUT } from '../session/session.actions'

const initialState = {
    students: [],
    teachers: [],
    lessons: [],
    payments: [],
    responseCalendar: [],
    responseEditLesson: null,

    getStudentsStatus: NONE,
    getTeachersStatus: NONE,
    getLessonsStatus: NONE,
    getPaymentsStatus: NONE,
    getCalendarStatus: NONE,
    editLessonStatus: NONE,
}

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        /* Get students */
        case GET_STUDENTS: return { ...state, getStudentsStatus: LOADING }
        case GET_STUDENTS_RESPONSE: return { ...state, getStudentsStatus: SUCCESS, students: action.response }
        case GET_STUDENTS_ERROR: return { ...state, getStudentsStatus: ERROR, students: action.response }

        /* Get teachers */
        case GET_TEACHERS: return { ...state, getTeachersStatus: LOADING }
        case GET_TEACHERS_RESPONSE: return { ...state, getTeachersStatus: SUCCESS, teachers: action.response }
        case GET_TEACHERS_ERROR: return { ...state, getTeachersStatus: ERROR, teachers: action.response }

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

        /*edit lesson*/
        case EDIT_LESSON: return { ...state, editLessonStatus: LOADING }
        case EDIT_LESSON_RESPONSE: return { ...state, editLessonStatus: SUCCESS, responseEditLesson: action.response }
        case EDIT_LESSON_ERROR: return { ...state, editLessonStatus: ERROR, responseEditLesson: action.response }

        /* Logout */
        case LOGOUT: return initialState

        default:
            return state
    }
}

export default sessionReducer