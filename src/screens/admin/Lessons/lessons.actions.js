export const CREATE_LESSON = 'CREATE_LESSON'; 
export const CREATE_LESSON_RESPONSE = 'CREATE_LESSON_RESPONSE'; 
export const CREATE_LESSON_ERROR = 'CREATE_LESSON_ERROR'; 

export const UPDATE_LESSON = 'UPDATE_LESSON';
export const UPDATE_LESSON_RESPONSE = 'UPDATE_LESSON_RESPONSE';
export const UPDATE_LESSON_ERROR = 'UPDATE_LESSON_ERROR';

export const DELETE_LESSON = 'DELETE_LESSON';
export const DELETE_LESSON_RESPONSE = 'DELETE_LESSON_RESPONSE';
export const DELETE_LESSON_ERROR = 'DELETE_LESSON_ERROR';

const adminLessonsActions = {
    createLesson: (data) => ({type: CREATE_LESSON, data}),
    createLessonResponse: (response) => ({type: CREATE_LESSON_RESPONSE, response}),
    createLessonError: (error) => ({type: CREATE_LESSON_ERROR, error}),

    updateLesson: (data) => ({type: UPDATE_LESSON, data}),
    updateLessonResponse: (response) => ({type: UPDATE_LESSON_RESPONSE, response}),
    updateLessonError: (error) => ({type: UPDATE_LESSON_ERROR, error}),

    deleteLesson: (data) => ({type: DELETE_LESSON, data}),
    deleteLessonResponse: (response) => ({type: DELETE_LESSON_RESPONSE, response}),
    deleteLessonError: (error) => ({type: DELETE_LESSON_ERROR, error}),
}

export default adminLessonsActions;