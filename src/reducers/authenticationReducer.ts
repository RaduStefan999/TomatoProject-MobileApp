import {LOGIN_SUCCESS, 
    LOGIN_ERROR,  
    REGISTER,
    LOGOUT_CLIENT_SIDE} from './../actions/types'

const initialState = {
    token: '',
    isLoggedIn: false,
    loginErrors: []
}

const authenticationReducer = (state = initialState, action: any) => {
    
    switch(action.type) {

        case LOGIN_SUCCESS:
            return {
                ...state, isLoggedIn : true, token : action.payload , loginErrors : []
            }
        case LOGIN_ERROR:
            return {
                ...state, loginErrors : action.payload
            }
            
        case REGISTER:
            return state
        case LOGOUT_CLIENT_SIDE:
            return {
                ...state, isLoggedIn: false, token: '' 
            }
        default:
            return state
    }
}

export default authenticationReducer