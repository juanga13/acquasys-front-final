import sessionActions, {
    LOGIN,
    REFRESH_TOKEN,
    GET_PROFILE,    
    LOGOUT,
} from './session.actions'
import requests from './session.services'
import { push } from 'connected-react-router'
import roles from '../../utils/roles';
import adminActions from '../admin/admin.actions';
import {tenDaysBeforeNow} from "../../utils/dates";

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
                    dispatch(sessionActions.getProfile())
                    if (data.role === roles.ADMIN) {
                        dispatch(adminActions.getStudents())
                        dispatch(adminActions.getTeachers())
                        dispatch(adminActions.getLessons())
                        dispatch(adminActions.getPayments())
                        dispatch(adminActions.getCalendar(tenDaysBeforeNow().getTime(), new Date().getTime()))
                    }
                    dispatch(push('/profile'));
                })
                .catch(error => dispatch(sessionActions.loginError(error)))
            break;
            
        case REFRESH_TOKEN:
            requests.checkToken()
                .then(data => { 
                    if (localStorage.getItem('role') === "ROLE_ADMIN") {
                        dispatch(sessionActions.getProfile())
                        dispatch(adminActions.getStudents())
                        dispatch(adminActions.getTeachers())
                        dispatch(adminActions.getLessons())
                        dispatch(adminActions.getPayments())
                        dispatch(adminActions.getCalendar(tenDaysBeforeNow().getTime(), new Date().getTime()))
                    }
                    dispatch(sessionActions.refreshTokenResponse(data))})
                .catch(error => {
                    delete localStorage['token'];
                    delete localStorage['role'];
                    dispatch(sessionActions.refreshTokenError(error))
                })
            break;
            
        case GET_PROFILE:
            requests.getProfile()
                .then(data => { dispatch(sessionActions.getProfileResponse(data)) })
                .catch(error => { dispatch(sessionActions.getProfileError(error)) })
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