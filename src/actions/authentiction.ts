import {LOADING, LOGIN_REQUEST_ASYNC, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, REGISTER} from './types'

export const loginRequest = (email: string, password: string) => {
    return {
        type: LOGIN_REQUEST_ASYNC,
        email: email,
        password: password
    }
}

export const loginSuccess = (token: string) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token
    }
}


export const loginError = (errors: []) => {
    return {
        type: LOGIN_ERROR,
        payload: errors
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const register = (email: string, name: string, password: string) => {
    return {
        type: REGISTER,
        email: email,
        name: name,
        password: password
    }
}