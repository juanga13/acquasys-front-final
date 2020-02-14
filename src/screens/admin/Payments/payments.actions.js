export const PAY = 'PAY'
export const PAY_RESPONSE = 'PAY_RESPONSE'
export const PAY_ERROR = 'PAY_ERROR'
export const GET_CURRENT_FEE = 'GET_CURRENT_FEE'
export const GET_CURRENT_FEE_RESPONSE = 'GET_CURRENT_FEE_RESPONSE'
export const GET_CURRENT_FEE_ERROR = 'GET_CURRENT_FEE_ERROR'
export const SET_FEE = 'SET_FEE'
export const SET_FEE_RESPONSE = 'SET_FEE_RESPONSE'
export const SET_FEE_ERROR = 'SET_FEE_ERROR'

const adminPaymentsActions = {
    pay: (id) => ({type: PAY, id: id}),
    payResponse: (response) => ({type: PAY_RESPONSE, response: response}),
    payError: (error) => ({type: PAY_ERROR, response: error}),

    getCurrentFee: () => ({type: GET_CURRENT_FEE}),    
    getCurrentFeeResponse: (response) => ({type: GET_CURRENT_FEE_RESPONSE, response: response}),    
    getCurrentFeeError: (error) => ({type: GET_CURRENT_FEE_ERROR, response: error}),    
    
    setFee: (amount) => ({type: SET_FEE, amount: amount}),
    setFeeResponse: (response) => ({type: SET_FEE_RESPONSE, response: response}),
    setFeeError: (error) => ({type: SET_FEE_ERROR, response: error})
}

export default adminPaymentsActions