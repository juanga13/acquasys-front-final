import sessionActions, {
    LOGIN,
    LOGOUT,
    REFRESH_TOKEN,
} from './session.actions'
import requests from './session.services'
import { push } from 'connected-react-router'
import roles from '../../utils/roles';
import adminActions from '../admin/admin.actions';

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
                    if (data.role === roles.ADMIN) {
                        dispatch(adminActions.getProfile())
                        dispatch(adminActions.getStudents())
                        dispatch(adminActions.getTeachers())
                        dispatch(adminActions.getLessons())
                        dispatch(adminActions.getPayments())
                    }
                    dispatch(push('/profile'));
                })
                .catch(error => dispatch(sessionActions.loginError(error)))
            break;
        case REFRESH_TOKEN:
            requests.checkToken()
                .then(data => { 
                    if (localStorage.getItem('role') === roles.ADMIN) {
                        dispatch(adminActions.getProfile())
                        dispatch(adminActions.getStudents())
                        dispatch(adminActions.getTeachers())
                        dispatch(adminActions.getLessons())
                        dispatch(adminActions.getPayments())
                    }
                    dispatch(sessionActions.refreshTokenResponse(data))})
                .catch(error => { 
                    delete localStorage['token'];
                    delete localStorage['role'];
                    dispatch(sessionActions.refreshTokenError(error))
                })
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