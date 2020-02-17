export const GET_STUDENT_PROFILE = 'GET_STUDENT_PROFILE'
export const GET_STUDENT_PROFILE_RESPONSE = 'GET_STUDENT_PROFILE_RESPONSE'
export const GET_STUDENT_PROFILE_ERROR = 'GET_STUDENT_PROFILE_ERROR'
export const EDIT_PROFILE = 'EDIT_PROFILE'
export const EDIT_PROFILE_RESPONSE = 'EDIT_PROFILE_RESPONSE'
export const EDIT_PROFILE_ERROR = 'EDIT_PROFILE_ERROR'

const unverifiedActions = {
    getStudentProfile: () => ({type: GET_STUDENT_PROFILE}),
    getStudentProfileResponse: (data) => ({type: GET_STUDENT_PROFILE_RESPONSE, response: data}),
    getStudentProfileError: (error) => ({type: GET_STUDENT_PROFILE_ERROR, response: error}),

    editProfile: (profile) => ({type: EDIT_PROFILE, profile}),
    editProfileResponse: (data) => ({type: EDIT_PROFILE_RESPONSE, response: data}),
    editProfileError: (error) => ({type: EDIT_PROFILE_ERROR, response: error})
}

export default unverifiedActions