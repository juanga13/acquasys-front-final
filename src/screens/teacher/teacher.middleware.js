import teacherActions, {
    GET_LESSONS,
    GET_ATTENDANCES
} from './teacher.actions'
import requests from './teacher.services'

const teacherMiddleware = ({dispatch, getState}) => next => action => {
    next(action);
    switch(action.type) {
        case GET_LESSONS: 
            requests.getLessons()
                .then(response => dispatch(teacherActions.getLessonsResponse(response)))
                .catch(error => dispatch(teacherActions.getLessonsError(error)))
            break;

        case GET_ATTENDANCES: 
            requests.setAttendance()
                .then(response => dispatch(teacherActions.getAttendancesResponse(response)))
                .catch(error => dispatch(teacherActions.getAttendancesError(error)))
            break;

        default:
            break;
    }
}

export default teacherMiddleware