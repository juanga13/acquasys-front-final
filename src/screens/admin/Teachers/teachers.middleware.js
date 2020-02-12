import adminTeachersActions, {
    CREATE,
    UPDATE,
    DELETE,
} from './teachers.actions'
import requests from './teachers.services'


const adminTeachersMiddleware = ({dispatch, getState}) => next => action => {
    next(action);
    switch (action.type) {
        case CREATE:
            requests.createTeacher(action.data)
                .then(response => dispatch(adminTeachersActions.createResponse(response)))
                .catch(error => dispatch(adminTeachersActions.createError(error)));
            break;
        case UPDATE:
            requests.updateTeacher(action.data)
                .then(response => dispatch(adminTeachersActions.updateResponse(response)))
                .catch(error => dispatch(adminTeachersActions.updateError(error)));
            break;
        case DELETE:
            requests.deleteTeacher(action.id)
                .then(response => dispatch(adminTeachersActions.deleteResponse(response)))
                .catch(error => dispatch(adminTeachersActions.deleteError(error)));
            break;

        default:
            break;
    }
}

export default adminTeachersMiddleware