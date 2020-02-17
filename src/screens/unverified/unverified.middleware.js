import unverifiedActions, {
    GET_STUDENT_PROFILE, EDIT_PROFILE
} from './unverified.actions'
import requests from './unverified.services'

const unverifiedMiddleware = ({dispatch, getState}) => next => action => {
    next(action);
    switch (action.type) {
        case GET_STUDENT_PROFILE:
            requests.getStudentProfile()
                .then(data => { dispatch(unverifiedActions.getStudentProfileResponse(data)) })
                .catch(error => { dispatch(unverifiedActions.getStudentProfileError(error)) })
            break;

        case EDIT_PROFILE:
            requests.editProfile(action.lesson)
                .then(data => {dispatch(unverifiedActions.editProfileResponse(data))})
                .catch((error => {dispatch(unverifiedActions.editProfileError(error))}))
            break;

        default:
            break;
    }
}

export default unverifiedMiddleware