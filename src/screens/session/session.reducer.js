import {
    LOGIN,
    LOGIN_RESPONSE,
    LOGIN_ERROR,
    
    REGISTER,
    REGISTER_RESPONSE,
    REGISTER_ERROR,
    
    REFRESH_TOKEN,
    REFRESH_TOKEN_RESPONSE,
    REFRESH_TOKEN_ERROR,

    GET_PROFILE,
    GET_PROFILE_RESPONSE,
    GET_PROFILE_ERROR,
    
    LOGOUT
} from './session.actions'
import { NONE, LOADING, SUCCESS, ERROR } from '../../utils/requestStates'

const initialState = {
    isLoggedIn: false,
    loginResponse: null,
    loginStatus: NONE,

    registerStatus: NONE,

    refreshResponse: null,
    refreshStatus: NONE,

    profile: null,
}

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        /* Login */
        case LOGIN: return { ...state, isLoggedIn: false, loginStatus: LOADING, refreshResponse: null, refreshStatus: NONE }
        case LOGIN_RESPONSE: return { ...state, isLoggedIn: true, loginResponse: action.response, loginStatus: SUCCESS }
        case LOGIN_ERROR: return { ...state, isLoggedIn: false, loginResponse: action.response, loginStatus: ERROR }

        /** Register */
        case REGISTER: return {...state, registerStatus: LOADING}
        case REGISTER_RESPONSE: return {...state, registerStatus: SUCCESS}
        case REGISTER_ERROR: return {...state, registerStatus: ERROR}

        /* Refresh token */
        case REFRESH_TOKEN: return { ...state, isLoggedIn: false, refreshStatus: LOADING } 
        case REFRESH_TOKEN_RESPONSE: return { ...state, isLoggedIn: true, refreshResponse: action.response, refreshStatus: SUCCESS }
        case REFRESH_TOKEN_ERROR: return { ...state, isLoggedIn: false, refreshResponse: action.response, refreshStatus: ERROR }
        
        /* Get profile */
        case GET_PROFILE:           return { ...state, getProfileStatus: LOADING }
        case GET_PROFILE_RESPONSE:  return { ...state, getProfileStatus: SUCCESS, responseProfile: action.response }
        case GET_PROFILE_ERROR:     return { ...state, getProfileStatus: ERROR, responseProfile: action.response }
        
        /* Logout */
        case LOGOUT:
            return initialState

        default:
            return state
    }
}

export default sessionReducer