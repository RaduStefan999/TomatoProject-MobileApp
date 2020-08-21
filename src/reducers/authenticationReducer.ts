import {LOGIN_SUCCESS, 
    LOGIN_ERROR, 
    LOGOUT, 
    REGISTER} from './../actions/types'

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

        case LOGOUT:
            return state
        case REGISTER:
            return state
        default:
            return state
    }
}

export default authenticationReducer