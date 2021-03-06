export const GET_STUDENTS = 'GET_STUDENTS'
export const GET_STUDENTS_RESPONSE = 'GET_STUDENTS_RESPONSE'
export const GET_STUDENTS_ERROR = 'GET_STUDENTS_ERROR'
export const GET_TEACHERS = 'GET_TEACHERS'
export const GET_TEACHERS_RESPONSE = 'GET_TEACHERS_RESPONSE'
export const GET_TEACHERS_ERROR = 'GET_TEACHERS_ERROR'
export const GET_LESSONS = 'GET_LESSONS'
export const GET_LESSONS_RESPONSE = 'GET_LESSONS_RESPONSE'
export const GET_LESSONS_ERROR = 'GET_LESSONS_ERROR'
export const GET_PAYMENTS = 'GET_PAYMENTS'
export const GET_PAYMENTS_RESPONSE = 'GET_PAYMENTS_RESPONSE'
export const GET_PAYMENTS_ERROR = 'GET_PAYMENTS_ERROR'
export const GET_CALENDAR = 'GET_CALENDAR'
export const GET_CALENDAR_RESPONSE = 'GET_CALENDAR_RESPONSE'
export const GET_CALENDAR_ERROR = 'GET_CALENDAR_ERROR'
export const EDIT_LESSON = 'EDIT_LESSON'
export const EDIT_LESSON_RESPONSE = 'EDIT_LESSON_RESPONSE'
export const EDIT_LESSON_ERROR = 'EDIT_LESSON_ERROR'

const studentActions = {
    getStudents: () => ({type: GET_STUDENTS}),
    getStudentsResponse: (data) => ({type: GET_STUDENTS_RESPONSE, response: data}),
    getStudentsError: (error) => ({type: GET_STUDENTS_ERROR, response: error}),
    
    getTeachers: () => ({type: GET_TEACHERS}),
    getTeachersResponse: (data) => ({type: GET_TEACHERS_RESPONSE, response: data}),
    getTeachersError: (error) => ({type: GET_TEACHERS_ERROR, response: error}),
    
    getLessons: () => ({type: GET_LESSONS}),
    getLessonsResponse: (data) => ({type: GET_LESSONS_RESPONSE, response: data}),
    getLessonsError: (error) => ({type: GET_LESSONS_ERROR, response: error}),
    
    getPayments: () => ({type: GET_PAYMENTS}),
    getPaymentsResponse: (data) => ({type: GET_PAYMENTS_RESPONSE, response: data}),
    getPaymentsError: (error) => ({type: GET_PAYMENTS_ERROR, response: error}),

    getCalendar: (startDate, endDate) => ({type: GET_CALENDAR, startDate, endDate}),
    getCalendarResponse: (data) => ({type: GET_CALENDAR_RESPONSE, response: data}),
    getCalendarError: (error) => ({type: GET_CALENDAR_ERROR, response: error}),

    editLesson: (lesson) => ({type: EDIT_LESSON, lesson}),
    editLessonResponse: (data) => ({type: EDIT_LESSON_RESPONSE, response: data}),
    editLessonError: (error) => ({type: EDIT_LESSON_ERROR, response: error})
}

export default studentActions