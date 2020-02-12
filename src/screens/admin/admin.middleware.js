import adminActions, {
    GET_PROFILE,
    GET_STUDENTS,
    GET_TEACHERS,
    GET_LESSONS,
    GET_PAYMENTS,
    GET_CALENDAR,
    EDIT_LESSON
} from './admin.actions'
import requests from './admin.services'

const adminMiddleware = ({dispatch, getState}) => next => action => {
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

        case GET_CALENDAR:
            requests.getCalendar(action.startDate,action.endDate)
                .then(data => { dispatch(adminActions.getCalendarResponse(data))})
                .catch((error => {dispatch(adminActions.getCalendarError(error))}))
            break;

        case EDIT_LESSON:
            requests.editLesson(action.lesson)
                .then(data => {dispatch(adminActions.editLessonResponse(data))})
                .catch((error => {dispatch(adminActions.editLessonError(error))}))
            break;

        default:
            break;
    }
}

export default adminMiddleware