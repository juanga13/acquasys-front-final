export const CREATE_STUDENT = 'CREATE_STUDENT';
export const CREATE_STUDENT_RESPONSE = 'CREATE_STUDENT_RESPONSE';
export const CREATE_STUDENT_ERROR = 'CREATE_STUDENT_ERROR';

export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const UPDATE_STUDENT_RESPONSE = 'UPDATE_STUDENT_RESPONSE';
export const UPDATE_STUDENT_ERROR = 'UPDATE_STUDENT_ERROR';

export const DELETE_STUDENT = 'DELETE_STUDENT';
export const DELETE_STUDENT_RESPONSE = 'DELETE_STUDENT_RESPONSE';
export const DELETE_STUDENT_ERROR = 'DELETE_STUDENT_ERROR';

export const VERIFY_STUDENT = 'VERIFY_STUDENT';
export const VERIFY_STUDENT_RESPONSE = 'VERIFY_STUDENT_RESPONSE';
export const VERIFY_STUDENT_ERROR = 'VERIFY_STUDENT_ERROR';

const adminStudentsActions = {
    createStudent: (data) => ({type: CREATE_STUDENT, data: data}),
    createStudentResponse: (data) => ({type: CREATE_STUDENT_RESPONSE, response: data}),
    createStudentError: (error) => ({type: CREATE_STUDENT_ERROR, response: error}),

    updateStudent: (data) => ({type: UPDATE_STUDENT, data: data}),
    updateStudentResponse: (data) => ({type: UPDATE_STUDENT_RESPONSE, response: data}),
    updateStudentError: (error) => ({type: UPDATE_STUDENT_ERROR, response: error}),

    deleteStudent: (id) => ({type: DELETE_STUDENT, id: id}),
    deleteStudentResponse: (id) => ({type: DELETE_STUDENT_RESPONSE, id: id}),
    deleteStudentError: (error) => ({type: DELETE_STUDENT_ERROR, response: error}),

    verifyStudent: (id) => ({type: VERIFY_STUDENT, id: id}),
    verifyStudentResponse: (id) => ({type: VERIFY_STUDENT_RESPONSE, id: id}),
    verifyStudentError: (error) => ({type: VERIFY_STUDENT_ERROR, response: error}),

}

export default adminStudentsActions