import adminActions, {
    GET_PROFILE,
    GET_STUDENTS,
    GET_TEACHERS,
    GET_LESSONS,
    GET_PAYMENTS,
} from './admin.actions'
import requests from './admin.services'
import { push } from 'connected-react-router'

const adminMiddleware = ({dispatch, getState}) => next => action => {
    console.log('admin middleware')
    next(action);
    switch (action.type) {
        case GET_PROFILE:
            requests.getProfile()
                .then(data => { dispatch(adminActions.getProfileResponse(data)) })
                .catch(error => { dispatch(adminActions.getProfileError(error)) })
            break;
            
        case GET_STUDENTS:
            requests.getStudents()
                .then(data => { dispatch(adminActions.getStudentsResponse(data)) })
                .catch(error => { dispatch(adminActions.getStudentsError(error)) })
            break;
        case GET_TEACHERS:
            requests.getTeachers()
                .then(data => { dispatch(adminActions.getTeachersResponse(data)) })
                .catch(error => { dispatch(adminActions.getTeachersError(error)) })
            break;
            
        case GET_LESSONS:
            requests.getLessons()
                .then(data => { dispatch(adminActions.getLessonsResponse(data)) })
                .catch(error => { dispatch(adminActions.getLessonsError(error)) })
            break;
            
        case GET_PAYMENTS:
            requests.getPayments()
                .then(data => { dispatch(adminActions.getPaymentsResponse(data)) })
                .catch(error => { dispatch(adminActions.getPaymentsError(error)) })
            break;
        default:
            break;
    }
}

export default adminMiddleware