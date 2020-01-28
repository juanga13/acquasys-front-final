export const LOGIN = 'LOGIN';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const REFRESH_LOGIN = 'REFRESH_LOGIN';
export const REFRESH_LOGIN_RESPONSE = 'REFRESH_LOGIN_RESPONSE';
export const REFRESH_LOGIN_ERROR = 'REFRESH_LOGIN_ERROR';

export const LOGOUT = 'LOGOUT';

const sessionActions = {
    login: (email, password) => ({type: LOGIN, email, password}),
    loginResponse: (data) => ({type: LOGIN_RESPONSE, response: data}),
    loginError: (error) => ({type: LOGIN_ERROR, response: error}),
    
    refreshLogin: () => ({type: REFRESH_LOGIN}),
    
    logout: () => ({type: LOGOUT}),
}

export default sessionActions