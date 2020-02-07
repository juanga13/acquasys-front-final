import {
    LOGIN,
    LOGIN_RESPONSE,
    LOGIN_ERROR,
    REFRESH_TOKEN,
    REFRESH_TOKEN_RESPONSE,
    REFRESH_TOKEN_ERROR,
    LOGOUT
} from './session.actions'
import requestStates from '../../utils/requestStates'

const initialState = {
    isLoggedIn: false,
    loginResponse: null,
    loginStatus: requestStates.NONE,

    refreshResponse: null,
    refreshStatus: requestStates.NONE,
}

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {

        /* Login */
        case LOGIN:
            return {
                ...state,
                isLoggedIn: false,
                loginStatus: requestStates.LOADING,
                refreshResponse: null,
                refreshStatus: requestStates.NONE,
            }
        case LOGIN_RESPONSE:
            return {
                ...state,
                isLoggedIn: true,
                loginResponse: action.response,
                loginStatus: requestStates.SUCCESS,
            }
        case LOGIN_ERROR:
            return {
                ...state,
                isLoggedIn: false,
                loginResponse: action.response,
                loginStatus: requestStates.ERROR,
            }

        /* Refresh token */
        case REFRESH_TOKEN:
            return {
                ...state,
                isLoggedIn: false,
                refreshStatus: requestStates.LOADING,
            }
        case REFRESH_TOKEN_RESPONSE:
            return {
                ...state,
                isLoggedIn: true,
                refreshResponse: action.response,
                refreshStatus: requestStates.SUCCESS,
            }
        case REFRESH_TOKEN_ERROR:
            return {
                ...state,
                isLoggedIn: false,
                refreshResponse: action.response,
                refreshStatus: requestStates.ERROR,
            }
        
        /* Logout */
        case LOGOUT:
            return initialState

        default:
            return state
    }
}

export default sessionReducer