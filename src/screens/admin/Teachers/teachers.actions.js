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
    create: (data) => ({type: CREATE_TEACHER, data: data}),
    createResponse: (response) => ({type: CREATE_TEACHER_RESPONSE, response: response}),
    createError: (error) => ({type: CREATE_TEACHER_ERROR, response: error}),

    update: (data) => ({type: UPDATE_TEACHER, data: data}),
    updateResponse: (response) => ({type: UPDATE_TEACHER_RESPONSE, response: response}),
    updateError: (error) => ({type: UPDATE_TEACHER_ERROR, response: error}),

    delete: (id) => ({type: DELETE_TEACHER, id: id}),
    deleteResponse: (response) => ({type: DELETE_TEACHER_RESPONSE, response: response}),
    deleteError: (error) => ({type: DELETE_TEACHER_ERROR, response: error}),

}

export default adminTeachersActions