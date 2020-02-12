export const CREATE = 'CREATE';
export const CREATE_RESPONSE = 'CREATE_RESPONSE';
export const CREATE_ERROR = 'CREATE_ERROR';

export const UPDATE = 'UPDATE';
export const UPDATE_RESPONSE = 'UPDATE_RESPONSE';
export const UPDATE_ERROR = 'UPDATE_ERROR';

export const DELETE = 'DELETE';
export const DELETE_RESPONSE = 'DELETE_RESPONSE';
export const DELETE_ERROR = 'DELETE_ERROR';

const adminTeachersActions = {
    create: () => ({type: CREATE}),
    createResponse: (data) => ({type: CREATE_RESPONSE, response: data}),
    createError: (error) => ({type: CREATE_ERROR, response: error}),

    update: () => ({type: UPDATE}),
    updateResponse: (data) => ({type: UPDATE_RESPONSE, response: data}),
    updateError: (error) => ({type: UPDATE_ERROR, response: error}),

    delete: () => ({type: DELETE}),
    deleteResponse: (id) => ({type: DELETE_RESPONSE, id: id}),
    deleteError: (error) => ({type: DELETE_ERROR, response: error}),

}

export default adminTeachersActions