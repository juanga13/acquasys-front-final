import sessionActions, {
    LOGIN,
    REFRESH_TOKEN,
    GET_PROFILE,    
    LOGOUT,
    REGISTER,
} from './session.actions'
import requests from './session.services'
import { push } from 'connected-react-router'
import { ADMIN, TEACHER, STUDENT, UNVERIFIED_STUDENT } from '../../utils/roles';
import adminActions from '../admin/admin.actions';
import {tenDaysBeforeNow} from "../../utils/dates";
import teacherActions from '../teacher/teacher.actions';
import studentActions from "../student/student.actions";
import unverifiedActions from "../unverified/unverified.actions";

const sessionMiddleware = ({dispatch, getState}) => next => action => {
    next(action);
    switch (action.type) {
        case LOGIN:
            const { email: loginEmail, password: loginPassword } = action; 
            requests.login(loginEmail, loginPassword)
                .then(data => {
                    dispatch(sessionActions.loginResponse(data));
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('role', data.role);
                    dispatch(sessionActions.getProfile())

                    switch (data.role) {
                        case ADMIN:
                            dispatch(adminActions.getStudents())
                            dispatch(adminActions.getTeachers())
                            dispatch(adminActions.getLessons())
                            dispatch(adminActions.getPayments())
                            dispatch(adminActions.getCalendar(tenDaysBeforeNow().getTime(), new Date().getTime()))
                            break;

                        case TEACHER:
                            dispatch(teacherActions.getLessons())
                            dispatch(teacherActions.getAttendances())
                            break;

                        case STUDENT:
                          dispatch(studentActions.getLessons())
                          dispatch(studentActions.getCalendar(tenDaysBeforeNow().getTime(), new Date().getTime()))
                            break;

                        case UNVERIFIED_STUDENT:
                            // TODO: unverified actions here
                            break;

                            
                        default:
                            break;
                    } 
                    dispatch(push('/profile'));
                })
                .catch(error => dispatch(sessionActions.loginError(error)))
            break;
            
        case REGISTER:
            const { email: registerEmail, password: registerPassword } = action;
            requests.register(registerEmail, registerPassword)
                .then(response => {
                    dispatch(sessionActions.registerResponse(response));
                    // automatic login
                    dispatch(sessionActions.login(registerEmail, registerPassword));
                })
                .catch(error => dispatch(sessionActions.registerError(error)))
                break;
            
        case REFRESH_TOKEN:
            requests.checkToken()
                .then(data => { 
                    if (localStorage.getItem('role') === ADMIN) {
                        dispatch(sessionActions.getProfile())
                        dispatch(adminActions.getStudents())
                        dispatch(adminActions.getTeachers())
                        dispatch(adminActions.getLessons())
                        dispatch(adminActions.getPayments())
                        dispatch(adminActions.getCalendar(tenDaysBeforeNow().getTime(), new Date().getTime()))
                    }
                    if (localStorage.getItem('role')=== STUDENT) {
                        dispatch(studentActions.getLessons())
                        dispatch(studentActions.getCalendar(tenDaysBeforeNow().getTime(), new Date().getTime()))
                    }
                  if (localStorage.getItem('role')=== UNVERIFIED_STUDENT) {
                    dispatch(unverifiedActions.getStudentProfile())
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