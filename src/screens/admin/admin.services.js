import { baseUrl } from '../../settings'

const requests = {
    getProfile: () => {
        let requestOptions = {
            headers: {
                authorization: "Bearer " + localStorage.getItem("token"),
            },
            method: "GET",
            mode: "cors",
            cache: "no-cache",
        };
        return fetch(baseUrl + "/api/user/data", requestOptions)
            .then(response => { 
                console.log(response)
                return response.json() })
            .catch(error => { 
                console.error(error)
                return error })
    },
    
    getStudents: () => {
        const requestOptions = {
            method: "GET",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        };
        return fetch(baseUrl + "/api/student/all", requestOptions)
            .then(response => { 
                console.log(response)
                return response.json() })
            .catch(error => { 
                console.error(error)
                return error })
    },

    getTeachers: () => {
        const requestOptions = {
            method: "GET",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        };
        return fetch(baseUrl + "/api/teacher/all", requestOptions)
            .then(response => { 
                console.log(response)
                return response.json() })
            .catch(error => { 
                console.error(error)
                return error })
    },
    
    getLessons: () => {
        const requestOptions = {
            method: "GET",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        };
        return fetch(baseUrl + "/api/lesson/all", requestOptions)
            .then(response => { 
                console.log(response)
                return response.json() })
            .catch(error => { 
                console.error(error)
                return error })
    },
    
    getPayments: () => {
        const requestOptions = {
            method: "GET",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        };
        return fetch(baseUrl + "/payment/payments", requestOptions)
            .then(response => { 
                console.log(response)
                return response.json() })
            .catch(error => { 
                console.error(error)
                return error })
    },
}

export default requests