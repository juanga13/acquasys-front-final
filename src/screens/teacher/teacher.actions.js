export const GET_LESSONS = 'GET_LESSONS'
export const GET_LESSONS_RESPONSE = 'GET_LESSONS_RESPONSE'
export const GET_LESSONS_ERROR = 'GET_LESSONS_ERROR'

export const GET_ATTENDANCES = 'GET_ATTENDANCES'
export const GET_ATTENDANCES_RESPONSE = 'GET_ATTENDANCES_RESPONSE'
export const GET_ATTENDANCES_ERROR = 'GET_ATTENDANCES_ERROR'

const teacherActions = {
    getLessons: () => ({type: GET_LESSONS}),    
    getLessonsResponse: (response) => ({type: GET_LESSONS_RESPONSE, response: response}),
    getLessonsError: (error) => ({type: GET_LESSONS_ERROR, response: error}),

    getAttendances: () => ({type: GET_ATTENDANCES}),
    getAttendancesResponse: (response) => ({type: GET_ATTENDANCES_RESPONSE, response: response}),
    getAttendancesError: (error) => ({type: GET_ATTENDANCES_ERROR, response: error})
}

export default teacherActions