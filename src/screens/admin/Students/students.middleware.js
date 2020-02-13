import adminStudentsActions, {
    CREATE_STUDENT,
    UPDATE_STUDENT,
    DELETE_STUDENT,
    VERIFY_STUDENT,
} from './students.actions'
import requests from './students.services'
import adminActions from '../admin.actions'
import { act } from 'react-dom/test-utils';


const adminTeachersMiddleware = ({dispatch, getState}) => next => action => {
    next(action);
    switch (action.type) {
        case CREATE_STUDENT:
            // convert to ms as back uses ms
            let createData = action.data;
            createData.birthday = createData.birthday.getMilliseconds()
            createData.inscriptionDate = createData.inscriptionDate.getMilliseconds()
            
            requests.createStudent(createData)
                .then(response => {
                    dispatch(adminStudentsActions.createStudentResponse(response))
                    dispatch(adminActions.getStudents())
                })
                .catch(error => dispatch(adminStudentsActions.createStudentError(error)));
            break;

        case UPDATE_STUDENT:
            // convert to ms as back uses ms
            let updateData = action.data;
            updateData.birthday = updateData.birthday.getMilliseconds()
            updateData.inscriptionDate = updateData.inscriptionDate.getMilliseconds()
            
            requests.updateStudent(updateData)
                .then(response => {
                    dispatch(adminStudentsActions.updateStudentResponse(response))
                    dispatch(adminActions.getStudents())
                })
                .catch(error => dispatch(adminStudentsActions.updateStudentError(error)));
            break;

        case DELETE_STUDENT:
            requests.deleteStudent(action.id)
                .then(response => {
                    dispatch(adminStudentsActions.deleteStudentResponse(response))
                    dispatch(adminActions.getStudents())
                })
                .catch(error => {
                    dispatch(adminStudentsActions.deleteStudentError(error))
                });
            break;

        case VERIFY_STUDENT:
            requests.verifyStudent(action.id)
                .then(response => {
                    dispatch(adminStudentsActions.deleteStudentResponse(response))
                    dispatch(adminActions.getStudents())
                })
                .catch(error => {
                    dispatch(adminStudentsActions.deleteStudentError(error))
                });
            break;

        default:
            break;
    }
}

export default adminTeachersMiddleware