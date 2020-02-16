import studentActions, {
    GET_LESSONS,
    GET_PAYMENTS,
    GET_CALENDAR,
} from './student.actions'
import requests from './student.services'

const studentMiddleware = ({dispatch, getState}) => next => action => {
    next(action);
    switch (action.type) {
            
        case GET_LESSONS:
            requests.getLessons()
                .then(data => { dispatch(studentActions.getLessonsResponse(data)) })
                .catch(error => { dispatch(studentActions.getLessonsError(error)) })
            break;
            
        case GET_PAYMENTS:
            requests.getPayments()
                .then(data => { dispatch(studentActions.getPaymentsResponse(data)) })
                .catch(error => { dispatch(studentActions.getPaymentsError(error)) })
            break;

        case GET_CALENDAR:
            requests.getCalendar(action.startDate,action.endDate)
                .then(data => { dispatch(studentActions.getCalendarResponse(data))})
                .catch((error => {dispatch(studentActions.getCalendarError(error))}))
            break;

        default:
            break;
    }
}

export default studentMiddleware