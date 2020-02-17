import { baseUrl } from '../../settings'

const requests = {    
    getStudentProfile: () => {
        const requestOptions = {
            method: "GET",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        };
        return fetch(baseUrl + "/api/student/myself", requestOptions)
            .then(response => {
                if (response.ok) return response.json()
                else throw response.json()
            })
    },

    editProfile: (lesson) => {
        const requestOptions = {
            method: "PUT",
            mode: "cors",
            credentials: "same-origin",
            body: lesson,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        };
        return fetch(baseUrl + "/api/student/update", requestOptions)
            .then(response => {
                if (response.ok) return response.json()
                else throw response.json()
            })
    },

}

export default requests