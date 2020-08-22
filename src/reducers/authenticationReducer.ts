import {LOGIN_SUCCESS, 
    LOGIN_ERROR,  
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    RESET_AUTHENTICATION_DATA} from './../actions/types'

const initialState = {
    token: '',
    isLoggedIn: false,
    loginErrors: [],
    registerErrors: [],
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
            
        case REGISTER_SUCCESS:
            return {
                ...state, isLoggedIn : true, token : action.payload, registerErrors : []
            }
        case REGISTER_ERROR:
            return {
                ...state, registerErrors : action.payload
            }

        case RESET_AUTHENTICATION_DATA:
            return {
                ...state, isLoggedIn : false, token : '', loginErrors : [], registerErrors : []
            }
        default:
            return state
    }
}

export default authenticationReducer