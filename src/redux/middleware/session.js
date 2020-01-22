import sessionActions, {
    LOGIN,
    LOGOUT
} from '../actions/session'
import requests from '../services/session'
import { push } from 'connected-react-router'
import roles from '../../utils/roles'

const sessionMiddleware = ({dispatch, getState}) => next => action => {
    console.log('session middleware');
    console.log(action)
    next(action);
    switch (action.type) {
        case LOGIN:
            console.log('session middleware login')
            
            const { email, password } = action; 
            requests.login(email, password)
                .then(data => {
                    dispatch(sessionActions.loginResponse(data));
                    if (data.role === roles.ADMIN) dispatch(push('/profile'))  // TODO: maybe redirect to something else?
                    else dispatch(push('/profile'))
                })
                .catch(error => dispatch(sessionActions.loginError(error)))
            break;
        case LOGOUT:
            dispatch(push('/'))
            break;
        default:
            break;
    }
}

export default sessionMiddleware