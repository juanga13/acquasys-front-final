import { baseUrl } from '../../settings'

const requests = {
    login: (email, password) => {
        console.log('services session login');
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
            .then(res => {
                console.log('first login fetch')
                console.log(res)
                if (res.ok) return res.json();
                else throw (res.status)
            })
            .then(myJson => {
                console.log(myJson);
                tokenData.token = myJson.access_token;
                return fetch(baseUrl + "/oauth/check_token?token=" + tokenData.token, roleRequestOptions)
                    .then(response => { return response.json() }).then(myJson => {
                        console.log(myJson);
                        tokenData.role = myJson.authorities[0];
                        return tokenData;
                    })
                }
            )
    },
    
    refreshToken: () => {
        console.log('services refreshing token');
        const roleRequestOptions = {
            method: "GET",
            mode: "cors",
            cache: "no-cache"
        };
        return fetch(baseUrl + "/oauth/check_token?token=" + localStorage.getItem('token'), roleRequestOptions)
            .then(response => { return response.json() })
            .then(myJson => {
                console.log(myJson);
                return ;
            })
            .catch(error => console.error(error))
            
    }
}

export default requests