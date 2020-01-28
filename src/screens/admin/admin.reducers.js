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
  } from './admin.actions'
  import requestStates from '../../utils/requestStates'
  
  const initialState = {
      responseProfile: null,
      responseStudents: [],
      responseTeachers: [],
      responseLessons: [],
      responsePayments: [],

      getProfileStatus: requestStates.NONE,
      getStudentsStatus: requestStates.NONE,
      getTeachersStatus: requestStates.NONE,
      getLessonsStatus: requestStates.NONE,
      getPaymentsStatus: requestStates.NONE,
  }
  
  const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        
        /* Get profile */
        case GET_PROFILE:
            return {
                ...state,
                getProfileStatus: requestStates.LOADING,
            }
        case GET_PROFILE_RESPONSE:
            return {
                ...state,
                responseProfile: action.response,
                getProfileStatus: requestStates.SUCCESS,
            }
        case GET_PROFILE_ERROR:
            return {
                ...state,
                responseProfile: action.response,
                getProfileStatus: requestStates.ERROR,
            }
        
        /* Get students */
        case GET_STUDENTS:
            return {
                ...state,
                getStudentsStatus: requestStates.LOADING,
            }
        case GET_STUDENTS_RESPONSE:
            return {
                ...state,
                responseStudents: action.response,
                getStudentsStatus: requestStates.SUCCESS,
            }
        case GET_STUDENTS_ERROR:
            return {
                ...state,
                responseStudents: action.response,
                getStudentsStatus: requestStates.ERROR,
            }
        
        /* Get teachers */
        case GET_TEACHERS:
            return {
                ...state,
                getTeachersStatus: requestStates.LOADING,
            }
        case GET_TEACHERS_RESPONSE:
            return {
                ...state,
                responseTeachers: action.response,
                getTeachersStatus: requestStates.SUCCESS,
            }
        case GET_TEACHERS_ERROR:
            return {
                ...state,
                responseTeachers: action.response,
                getTeachersStatus: requestStates.ERROR,
            }
        
        /* Get lessons */
        case GET_LESSONS:
            return {
                ...state,
                getLessonsStatus: requestStates.LOADING,
            }
        case GET_LESSONS_RESPONSE:
            return {
                ...state,
                responseLessons: action.response,
                getLessonsStatus: requestStates.SUCCESS,
            }
        case GET_LESSONS_ERROR:
            return {
                ...state,
                responseLessons: action.response,
                getLessonsStatus: requestStates.ERROR,
            }
        
        /* Get payments */
        case GET_PAYMENTS:
            return {
                ...state,
                getPaymentsStatus: requestStates.LOADING,
            }
        case GET_PAYMENTS_RESPONSE:
            return {
                ...state,
                responsePayments: action.response,
                getPaymentsStatus: requestStates.SUCCESS,
            }
        case GET_PAYMENTS_ERROR:
            return {
                ...state,
                responsePayments: action.response,
                getPaymentsStatus: requestStates.ERROR,
            }
      default:
        return state
    }
  }
  
  export default sessionReducer