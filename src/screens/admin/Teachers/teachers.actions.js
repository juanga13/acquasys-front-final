export const CREATE_TEACHER = 'CREATE_TEACHER';
export const CREATE_TEACHER_RESPONSE = 'CREATE_TEACHER_RESPONSE';
export const CREATE_TEACHER_ERROR = 'CREATE_TEACHER_ERROR';

export const UPDATE_TEACHER = 'UPDATE_TEACHER';
export const UPDATE_TEACHER_RESPONSE = 'UPDATE_TEACHER_RESPONSE';
export const UPDATE_TEACHER_ERROR = 'UPDATE_TEACHER_ERROR';

export const DELETE_TEACHER = 'DELETE_TEACHER';
export const DELETE_TEACHER_RESPONSE = 'DELETE_TEACHER_RESPONSE';
export const DELETE_TEACHER_ERROR = 'DELETE_TEACHER_ERROR';

const adminTeachersActions = {
    createTeacher: (data) => ({type: CREATE_TEACHER, data: data}),
    createTeacherResponse: (response) => ({type: CREATE_TEACHER_RESPONSE, response: response}),
    createTeacherError: (error) => ({type: CREATE_TEACHER_ERROR, response: error}),

    updateTeacher: (data) => ({type: UPDATE_TEACHER, data: data}),
    updateTeacherResponse: (response) => ({type: UPDATE_TEACHER_RESPONSE, response: response}),
    updateTeacherError: (error) => ({type: UPDATE_TEACHER_ERROR, response: error}),

    deleteTeacher: (id) => ({type: DELETE_TEACHER, id: id}),
    deleteTeacherResponse: (response) => ({type: DELETE_TEACHER_RESPONSE, response: response}),
    deleteTeacherError: (error) => ({type: DELETE_TEACHER_ERROR, response: error}),

}

export default adminTeachersActions