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

    refreshTokenResponse: null,
    refreshTokenStatus: requestStates.NONE,
}

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {

        /* Login */
        case LOGIN:
            return {
                ...state,
                loginStatus: requestStates.LOADING,
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
                loginResponse: action.response,
                loginStatus: requestStates.ERROR,
            }

        /* Refresh token */
        case REFRESH_TOKEN:
            return {
                ...state,
                refreshTokenStatus: requestStates.LOADING,
            }
        case REFRESH_TOKEN_RESPONSE:
            return {
                ...state,
                isLoggedIn: true,
                refreshTokenResponse: action.response,
                refreshTokenStatus: requestStates.SUCCESS,
            }
        case REFRESH_TOKEN_ERROR:
            return {
                ...state,
                isLoggedIn: false,
                refreshTokenResponse: action.response,
                refreshTokenStatus: requestStates.ERROR,
            }

        /* Logout */
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                loginStatus: requestStates.NONE,
            }

        default:
            return state
    }
}

export default sessionReducer