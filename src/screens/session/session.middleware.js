import sessionActions, {
    LOGIN,
    REFRESH_LOGIN,
    LOGOUT,
} from './session.actions'
import requests from './session.services'
import { push } from 'connected-react-router'

const sessionMiddleware = ({dispatch, getState}) => next => action => {
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
                })
                .catch(error => dispatch(sessionActions.loginError(error)))
            break;
        case REFRESH_LOGIN:
            requests.checkToken()
                .then(data => { dispatch(sessionActions.loginResponse(data)) })
                .catch(error => dispatch(sessionActions.loginError(error)))
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