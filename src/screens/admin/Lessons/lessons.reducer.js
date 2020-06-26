import {
    CREATE_LESSON,
    CREATE_LESSON_RESPONSE,
    CREATE_LESSON_ERROR,
    UPDATE_LESSON,
    UPDATE_LESSON_RESPONSE,
    UPDATE_LESSON_ERROR,
    DELETE_LESSON,
    DELETE_LESSON_RESPONSE,
    DELETE_LESSON_ERROR,
} from './lessons.actions'
import { NONE, LOADING, SUCCESS, ERROR } from '../../../utils/requestStates'

const initialState = {
    createLessonStatus: NONE,
    updateLessonStatus: NONE,
    deleteLessonStatus: NONE,
}

const adminLessonsReducer = (state = initialState, action) => {
    switch (action.type) {
        /** Create lesson */
        case CREATE_LESSON: return {...state, createLessonStatus: LOADING}
        case CREATE_LESSON_RESPONSE: return {...state, createLessonStatus: SUCCESS}
        case CREATE_LESSON_ERROR: return {...state, createLessonStatus: ERROR}
        
        /** Update lesson */
        case UPDATE_LESSON: return {...state, updateLessonStatus: LOADING}
        case UPDATE_LESSON_RESPONSE: return {...state, updateLessonStatus: SUCCESS}
        case UPDATE_LESSON_ERROR: return {...state, updateLessonStatus: ERROR}
        
        /** Delete lesson */
        case DELETE_LESSON: return {...state, deleteLessonStatus: LOADING}
        case DELETE_LESSON_RESPONSE: return {...state, deleteLessonStatus: SUCCESS}
        case DELETE_LESSON_ERROR: return {...state, deleteLessonStatus: ERROR}

        default: return state
    }
}

export default adminLessonsReducer;