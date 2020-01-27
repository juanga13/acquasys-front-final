import sessionActions, {
    LOGIN,
    REFRESH_TOKEN,
    LOGOUT,
} from './session.actions'
import requests from './session.services'
import { push } from 'connected-react-router'

const sessionMiddleware = ({dispatch, getState}) => next => action => {
    console.log('session middleware')
    console.log(action)
    next(action);
    switch (action.type) {
        case LOGIN:
            const { email, password } = action; 
            requests.login(email, password)
                .then(data => {
                    dispatch(sessionActions.loginResponse(data));
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('role', data.role);
                    dispatch(push('/profile'));
                    console.log('redirected to profile')
                })
                .catch(error => dispatch(sessionActions.loginError(error)))
            break;
        case REFRESH_TOKEN:
            console.log('middleware refresh token')
            requests.refreshToken()
                .then(data => { dispatch(sessionActions.refreshTokenReponse(data)) })
                .catch(error => dispatch(sessionActions.refreshTokenError(error)))
            break;
        case LOGOUT:
            delete localStorage['token'];
            delete localStorage['role'];
            dispatch(push('/'));
            break;
        default:
            break;
    }
}

export default sessionMiddleware