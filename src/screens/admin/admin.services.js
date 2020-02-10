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
                if (response.ok) return response.json()
                else throw response.json()
            })
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
                if (response.ok) return response.json()
                else throw response.json()
            })
    },

    getCalendar: (startDate, endDate) => {
        const requestOptions = {
            method: "GET",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        };
        return fetch(baseUrl + "/api/lesson/calendar/" + startDate + "/" + endDate, requestOptions)
            .then(response => {
                if (response.ok) return response.json()
                else throw response.json()
            })
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
                if (response.ok) return response.json()
                else throw response.json()
            })
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
                if (response.ok) return response.json()
                else throw response.json()
            })
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
                if (response.ok) return response.json()
                else throw response.json()
            })
    },
}

export default requests