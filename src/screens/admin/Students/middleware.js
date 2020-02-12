import adminStudentsActions, {
    CREATE,
    UPDATE,
    DELETE,
} from './actions'
import requests from './services'


const adminTeachersMiddleware = ({dispatch, getState}) => next => action => {
    next(action);
    switch (action.type) {
        case CREATE:
            requests.createStudent(action.data)
                .then(response => dispatch(adminStudentsActions.createResponse(response)))
                .catch(error => dispatch(adminStudentsActions.createError(error)));
            break;
        case UPDATE:
            requests.updateStudent(action.data)
                .then(response => dispatch(adminStudentsActions.updateResponse(response)))
                .catch(error => dispatch(adminStudentsActions.updateError(error)));
            break;
        case DELETE:
            requests.deleteStudent(action.id)
                .then(response => dispatch(adminStudentsActions.deleteResponse(response)))
                .catch(error => dispatch(adminStudentsActions.deleteError(error)));
            break;

        default:
            break;
    }
}

export default adminTeachersMiddleware