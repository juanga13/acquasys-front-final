import adminStudentsActions, {
    PAY,
    GET_CURRENT_FEE,
    SET_FEE,
} from './actions'
import requests from './services'


const adminTeachersMiddleware = ({dispatch, getState}) => next => action => {
    next(action);
    switch (action.type) {
        case PAY:
            requests.pay(action.amount, action.id)
                .then(response => dispatch(adminStudentsActions.payResponse(response)))
                .catch(error => dispatch(adminStudentsActions.payError(error)));
            break;
        case GET_CURRENT_FEE:
            requests.getCurrentFee(action.data)
                .then(response => dispatch(adminStudentsActions.getCurrentFeeResponse(response)))
                .catch(error => dispatch(adminStudentsActions.getCurrentFeeError(error)));
            break;
        case SET_FEE:
            requests.setFee(action.amount)
                .then(response => dispatch(adminStudentsActions.setFeeResponse(response)))
                .catch(error => dispatch(adminStudentsActions.setFeeError(error)));
            break;

        default:
            break;
    }
}

export default adminTeachersMiddleware