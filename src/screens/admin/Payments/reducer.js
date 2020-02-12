import {
    PAY,
    PAY_RESPONSE,
    PAY_ERROR,
    GET_CURRENT_FEE,
    GET_CURRENT_FEE_RESPONSE,
    GET_CURRENT_FEE_ERROR,
    SET_FEE,
    SET_FEE_RESPONSE,
    SET_FEE_ERROR,
} from './actions'
import { NONE, LOADING, SUCCESS, ERROR } from '../../../utils/requestStates'

const initialState = {
    currentFee: 0,
    
    payStatus: NONE,
    getCurrentFeeStatus: NONE,
    setFeeStatus: NONE,
}

const adminStudentsReducer = (state = initialState, action) => {
    switch (action.type) {
        /** Pay - Create payment */
        case PAY: return {...state, payStatus: LOADING}
        case PAY_RESPONSE: return {...state, payStatus: SUCCESS}
        case PAY_ERROR: return {...state, payStatus: ERROR}
        
        /** Get current fee */
        case GET_CURRENT_FEE: return {...state, getCurrentFeeStatus: LOADING}
        case GET_CURRENT_FEE_RESPONSE: return {...state, getCurrentFeeStatus: SUCCESS, currentFee: action.response}
        case GET_CURRENT_FEE_ERROR: return {...state, getCurrentFeeStatus: ERROR}
        
        /** Set fee */
        case SET_FEE: return {...state, deleteStatus: LOADING}
        case SET_FEE_RESPONSE: return {...state, deleteStatus: SUCCESS}
        case SET_FEE_ERROR: return {...state, deleteStatus: ERROR}

        default: return state
    }
}

export default adminStudentsReducer