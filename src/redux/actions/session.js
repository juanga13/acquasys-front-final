export const LOGIN = 'LOGIN';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

const sessionActions = {
    login: (email, password) => ({type: LOGIN, email, password}),
    loginResponse: (data) => ({type: LOGIN_RESPONSE, response: data}),
    loginError: (error) => ({type: LOGIN_ERROR, response: error}),
    logout: () => ({type: LOGOUT}),
}

export default sessionActions