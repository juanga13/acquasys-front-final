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
    createStudent: (data) => ({type: CREATE_STUDENT, data}),
    createStudentResponse: (response) => ({type: CREATE_STUDENT_RESPONSE, response}),
    createStudentError: (error) => ({type: CREATE_STUDENT_ERROR, error}),

    updateStudent: (data) => ({type: UPDATE_STUDENT, data}),
    updateStudentResponse: (response) => ({type: UPDATE_STUDENT_RESPONSE, response}),
    updateStudentError: (error) => ({type: UPDATE_STUDENT_ERROR, error}),

    deleteStudent: (id) => ({type: DELETE_STUDENT, id}),
    deleteStudentResponse: (response) => ({type: DELETE_STUDENT_RESPONSE, response}),
    deleteStudentError: (error) => ({type: DELETE_STUDENT_ERROR, error}),

    verifyStudent: (id) => ({type: VERIFY_STUDENT, id}),
    verifyStudentResponse: (response) => ({type: VERIFY_STUDENT_RESPONSE, response}),
    verifyStudentError: (error) => ({type: VERIFY_STUDENT_ERROR, error}),

}

export default adminStudentsActions