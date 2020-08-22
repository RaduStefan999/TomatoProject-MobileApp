import {LOGIN_SUCCESS, 
        LOGIN_ERROR,
        REGISTER_SUCCESS,
        REGISTER_ERROR} from './types'

import {setLoading, resetAuthenticationData, resetProductData} from './global'
import {adress} from './../constants/serverData'

//LOGIN - ACTIONS
export const login = (email: string, password: string) => {
    return async dispatch => {
        dispatch (setLoading(true))

        try {
            const data = {
                'email': email,
                'password': password
            }
            await fetch(`${adress}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                dispatch (setLoading(false))
                if (data.success == true) {
                    dispatch(loginSuccess(data.token))
                }
                else {
                    let errors = []
                    for (let key in data.errors) {
                        errors = errors.concat(data.errors[key])
                    }
                    dispatch(loginError(errors))
                }
            })
        }
        catch(e) {
            dispatch (setLoading(false))
            dispatch(loginError(['Server connection problem']))
        }
    }
}

export const loginSuccess = (token: string) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token
    }
}

export const loginError = (errors: any) => {
    return {
        type: LOGIN_ERROR,
        payload: errors
    }
}

//LOGOUT
export const logout = (token: string) => {
    return async dispatch => {
        dispatch (setLoading(true))

        try {
            const data = {
                'token': token
            }
            await fetch(`${adress}/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                dispatch (setLoading(false))
                if (data.success == true) {
                    dispatch(logoutClientSide())
                }
                else if (data.expiredToken == true) {
                    dispatch(logoutClientSide())
                }
            })
        }
        catch(e) {
            dispatch (setLoading(false))
            dispatch(loginError(['Server connection problem']))
        }
    }
}

export const logoutClientSide = () => {
    return async dispatch => {
        dispatch (resetAuthenticationData())
        dispatch (resetProductData())
    }
}

export const register = (email: string, name: string, password: string) => {
    return async dispatch => {
        dispatch (setLoading(true))

        try {
            const data = {
                'email': email,
                'name': name,
                'password': password
            }
            await fetch(`${adress}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                dispatch (setLoading(false))
                if (data.success == true) {
                    dispatch(registerSuccess(data.token))
                }
                else {
                    let errors = []
                    for (let key in data.errors) {
                        errors = errors.concat(data.errors[key])
                    }
                    dispatch(registerError(errors))
                }
            })
        }
        catch(e) {
            dispatch (setLoading(false))
            dispatch(registerError(['Server connection problem']))
        }
    }
}

export const registerSuccess = (token: string) => {
    return {
        type: REGISTER_SUCCESS,
        payload: token
    }
}

export const registerError = (errors: any) => {
    return {
        type: REGISTER_ERROR,
        payload: errors
    }
}