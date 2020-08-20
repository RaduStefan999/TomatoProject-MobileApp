import {LOADING, 
    LOGIN_SUCCESS, 
    LOGIN_ERROR, 
    LOGOUT, 
    REGISTER} from './../actions/types'

const initialState = {
    token: '',
    isLoggedIn: false,
    isLoading: false,
    login_errors: {}
}

const authenticationReducer = (state = initialState, action: any) => {
    
    switch(action.type) {

        case LOADING:
            return {
                ...state, isLoading : true
            }

        case LOGIN_SUCCESS:
            return {
                ...state, isLoading : false, isLoggedIn : true, token : action.payload 
            }
        case LOGIN_ERROR:
            return {
                ...state, isLoading : false, login_errors : action.payload
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