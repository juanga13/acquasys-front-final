import adminTeachersActions, {
    CREATE_TEACHER,
    UPDATE_TEACHER,
    DELETE_TEACHER,
} from './teachers.actions'
import requests from './teachers.services'


const adminTeachersMiddleware = ({dispatch, getState}) => next => action => {
    next(action);
    switch (action.type) {
        case CREATE_TEACHER:
            requests.createTeacher(action.data)
                .then(response => dispatch(adminTeachersActions.createTeacherResponse(response)))
                .catch(error => dispatch(adminTeachersActions.createTeacherError(error)));
            break;
        case UPDATE_TEACHER:
            requests.updateTeacher(action.data)
                .then(response => dispatch(adminTeachersActions.updateTeacherResponse(response)))
                .catch(error => dispatch(adminTeachersActions.updateTeacherError(error)));
            break;
        case DELETE_TEACHER:
            requests.deleteTeacher(action.id)
                .then(response => dispatch(adminTeachersActions.deleteTeacherResponse(response)))
                .catch(error => dispatch(adminTeachersActions.deleteTeacherError(error)));
            break;

        default:
            break;
    }
}

export default adminTeachersMiddleware