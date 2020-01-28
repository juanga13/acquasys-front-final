import {
    LOGIN,
    LOGIN_RESPONSE,
    LOGIN_ERROR,
    REFRESH_LOGIN,
    REFRESH_LOGIN_RESPONSE,
    REFRESH_LOGIN_ERROR,
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
        case REFRESH_LOGIN:
            return {
                ...state,
                refreshTokenStatus: requestStates.LOADING,
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