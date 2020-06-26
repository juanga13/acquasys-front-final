import adminLessonsActions, {
    CREATE_LESSON,
    UPDATE_LESSON,
    DELETE_LESSON,
} from './lessons.actions'
import requests from './lessons.actions'
import adminActions from '../admin.actions'


const adminLessonsMiddleware = ({dispatch, getState}) => next => action => {
    next(action);
    switch (action.type) {
        case CREATE_LESSON:            
            requests.createLesson(action.data)
                .then(response => {
                    dispatch(adminLessonsActions.createLessonResponse(response))
                    dispatch(adminActions.getLessons())
                })
                .catch(error => dispatch(adminLessonsActions.createLessonError(error)));
            break;

        case UPDATE_LESSON:
            requests.updateLesson(action.data)
                .then(response => {
                    dispatch(adminLessonsActions.updateLessonResponse(response))
                    dispatch(adminActions.getLessons())
                })
                .catch(error => dispatch(adminLessonsActions.updateLessonError(error)));
            break;

        case DELETE_LESSON:
            requests.deleteLesson(action.id)
                .then(response => {
                    dispatch(adminLessonsActions.deleteLessonResponse(response))
                    dispatch(adminActions.getLessons())
                })
                .catch(error => {
                    dispatch(adminLessonsActions.deleteLessonError(error))
                });
            break;

        default:
            break;
    }
}

export default adminLessonsMiddleware