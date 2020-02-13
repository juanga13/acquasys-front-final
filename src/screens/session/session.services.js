import { baseUrl } from '../../settings'

const requests = {
    login: (email, password) => {
        const tokenRequestOptions = { method: 'POST',
            mode: "cors", 
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic Y2xpZW50aWQ6Y2xpZW50c2VjcmV0"  // clientid and clientsecret    
            },
            body: "grant_type=password&password=" + password + "&username=" + email
        };
        const roleRequestOptions = {
            method: "GET",
            mode: "cors",
            cache: "no-cache"
        };
        let tokenData = {token: '', role: ''}
        return fetch(baseUrl + '/oauth/token', tokenRequestOptions)
            .then(response => { return response.json() })
            .catch(error => { throw error })
            // get json and continue
            .then(myJson => {
                tokenData.token = myJson.access_token;
                return fetch(baseUrl + "/oauth/check_token?token=" + tokenData.token, roleRequestOptions)
                    .then(response => { return response.json() })
                    .catch(error => { throw error })
                    
                    .then(myJson => {
                        tokenData.role = myJson.authorities[0];
                        return tokenData;
                    })
                }
            )
    },
    
    checkToken: () => {
        console.log('check token')
        const roleRequestOptions = {
            method: "GET",
            mode: "cors",
            cache: "no-cache"
        };
        return fetch(baseUrl + "/oauth/check_token?token=" + localStorage.getItem('token'), roleRequestOptions)
            .then(response => {
                if (response.ok) return response.json() 
                else throw response.json()
            })
            .then(response => { return response })
            .catch(error=> { throw error })
    },

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
}

export default requests