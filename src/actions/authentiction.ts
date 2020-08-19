import {LOGIN, LOGOUT, REGISTER} from './types'

export const login = (email: string, password: string) => {
    return {
        type: LOGIN,
        email: email,
        password: password
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