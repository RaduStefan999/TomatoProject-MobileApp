import {LOGIN, LOGOUT, REGISTER} from './../actions/types'

const initialState = {
    token: '',
    isLoggedIn: false
}

const authenticationReducer = (state = initialState, action: any) => {
    
    switch(action.type) {

        case LOGIN:
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