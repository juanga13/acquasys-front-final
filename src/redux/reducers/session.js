import {
  LOGIN,
  LOGIN_RESPONSE,
  LOGIN_ERROR,
  LOGOUT
} from '../actions/session'
import requestStates from '../../utils/requestStates'

const initialState = {
  isLoggedIn: false,
  loginStatus: requestStates.NONE,
}

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log('reducer LOGIN')
      return {
        ...state,
        loginStatus: requestStates.LOADING,
      }
    case LOGIN_RESPONSE:
      console.log('reducer LOGIN RESPONSE')
      return {
        ...state,
        isLoggedIn: true,
        response: action.response,
        loginStatus: requestStates.SUCCESS,
      }
    case LOGIN_ERROR:
      console.log('reducer LOGIN ERROR')
      console.log(action)
      return {
        ...state,
        response: action.response,
        loginStatus: requestStates.ERROR,
      }
    case LOGOUT:
      console.log('reducer LOGOUT')
      return {
        ...state,
        isLoggedIn: false,
        loginStatus: requestStates.NONE,
      }
    default:
      console.log('reducer default case')
      return state
  }
}

export default sessionReducer