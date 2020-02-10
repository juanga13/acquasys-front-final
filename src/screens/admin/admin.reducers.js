import {
    GET_PROFILE,
    GET_PROFILE_RESPONSE,
    GET_PROFILE_ERROR,
    
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
  } from './admin.actions'
  import { NONE, LOADING, ERROR, SUCCESS } from '../../utils/requestStates'
import { LOGOUT } from '../session/session.actions'
  
  const initialState = {
      responseProfile: null,
      responseStudents: [],
      responseTeachers: [],
      responseLessons: [],
      responsePayments: [],
      responseCalendar: [],

      getProfileStatus: NONE,
      getStudentsStatus: NONE,
      getTeachersStatus: NONE,
      getLessonsStatus: NONE,
      getPaymentsStatus: NONE,
      getCalendarStatus: NONE,
  }
  
  const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        
        /* Get profile */
        case GET_PROFILE:           return { ...state, getProfileStatus: LOADING }
        case GET_PROFILE_RESPONSE:  return { ...state, getProfileStatus: SUCCESS, responseProfile: action.response }
        case GET_PROFILE_ERROR:     return { ...state, getProfileStatus: ERROR, responseProfile: action.response }
        
        /* Get students */
        case GET_STUDENTS:          return { ...state, getStudentsStatus: LOADING }
        case GET_STUDENTS_RESPONSE: return { ...state, getStudentsStatus: SUCCESS, responseStudents: action.response }
        case GET_STUDENTS_ERROR:    return { ...state, getStudentsStatus: ERROR, responseStudents: action.response }
        
        /* Get teachers */
        case GET_TEACHERS:          return { ...state, getTeachersStatus: LOADING }
        case GET_TEACHERS_RESPONSE: return { ...state, getTeachersStatus: SUCCESS, responseTeachers: action.response }
        case GET_TEACHERS_ERROR:    return { ...state, getTeachersStatus: ERROR, responseTeachers: action.response }
        
        /* Get lessons */
        case GET_LESSONS:           return { ...state, getLessonsStatus: LOADING }
        case GET_LESSONS_RESPONSE:  return { ...state, getLessonsStatus: SUCCESS, responseLessons: action.response }
        case GET_LESSONS_ERROR:     return { ...state, getLessonsStatus: ERROR, responseLessons: action.response }
        
        /* Get payments */
        case GET_PAYMENTS:          return { ...state, getPaymentsStatus: LOADING }
        case GET_PAYMENTS_RESPONSE: return { ...state, getPaymentsStatus: SUCCESS, responsePayments: action.response }
        case GET_PAYMENTS_ERROR:    return { ...state, getPaymentsStatus: ERROR, responsePayments: action.response }

        /* Get calendar */
        case GET_CALENDAR:          return { ...state, getCalendarStatus: LOADING }
        case GET_CALENDAR_RESPONSE: return { ...state, getCalendarStatus: SUCCESS, responseCalendar: action.response }
        case GET_CALENDAR_ERROR:    return { ...state, getCalendarStatus: ERROR, responseCalendar: action.response }

        /* Logout */
        case LOGOUT:                return initialState

      default:
        return state
    }
  }
  
  export default sessionReducer