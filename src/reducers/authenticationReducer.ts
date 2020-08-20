import {LOADING, 
    LOGIN_SUCCESS, 
    LOGIN_ERROR, 
    LOGOUT, 
    REGISTER} from './../actions/types'

const initialState = {
    token: '',
    isLoggedIn: false,
    isLoading: false,
    loginErrors: []
}

const authenticationReducer = (state = initialState, action: any) => {
    
    switch(action.type) {

        case LOADING:
            return {
                ...state, isLoading : true
            }

        case LOGIN_SUCCESS:
            return {
                ...state, isLoading : false, isLoggedIn : true, token : action.payload , loginErrors : []
            }
        case LOGIN_ERROR:
            return {
                ...state, isLoading : false, loginErrors : action.payload
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