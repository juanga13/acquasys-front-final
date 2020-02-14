export const GET_PROFILE = 'GET_PROFILE'
export const GET_PROFILE_RESPONSE = 'GET_PROFILE_RESPONSE'
export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR'

export const LOGIN = 'LOGIN';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const REGISTER = 'REGISTER'
export const REGISTER_RESPONSE = 'REGISTER_RESPONSE'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const REFRESH_TOKEN_RESPONSE = 'REFRESH_TOKEN_RESPONSE';
export const REFRESH_TOKEN_ERROR = 'REFRESH_TOKEN_ERROR';

export const LOGOUT = 'LOGOUT';

const sessionActions = {
    getProfile: () => ({type: GET_PROFILE}),
    getProfileResponse: (data) => ({type: GET_PROFILE_RESPONSE, response: data}),
    getProfileError: (error) => ({type: GET_PROFILE_ERROR, response: error}),
    
    login: (email, password) => ({type: LOGIN, email, password}),
    loginResponse: (data) => ({type: LOGIN_RESPONSE, response: data}),
    loginError: (error) => ({type: LOGIN_ERROR, response: error}),
    
    register: (email, password) => ({type: REGISTER, email, password}),
    registerResponse: (response) => ({type: REGISTER_RESPONSE, response: response}),
    registerError: (error) => ({type: REGISTER_ERROR, response: error}),

    refreshToken: () => ({type: REFRESH_TOKEN}),
    refreshTokenResponse: (response) => ({type: REFRESH_TOKEN_RESPONSE, response: response}),
    refreshTokenError: (error) => ({type: REFRESH_TOKEN_ERROR, response: error}),
    
    logout: () => ({type: LOGOUT}),
}

export default sessionActions