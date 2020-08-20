import {LOADING, LOGIN_REQUEST_ASYNC, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, REGISTER} from './../actions/types'

const initialState = {
    token: '',
    isLoggedIn: false,
    isLoading: false
}

const authenticationReducer = (state = initialState, action: any) => {
    
    switch(action.type) {

        case LOADING:
            return {
                ...state, isLoading : true
            }
            

        case LOGIN_REQUEST_ASYNC:
            return state
        case LOGIN_SUCCESS:
            return state
        case LOGIN_ERROR:
            return state

        case LOGOUT:
            return state
        case REGISTER:
            return state
        default:
            return state
    }
}

export default authenticationReducer