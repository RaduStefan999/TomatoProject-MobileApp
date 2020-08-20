import {LOADING, 
        LOGIN_SUCCESS, 
        LOGIN_ERROR, 
        LOGOUT, 
        REGISTER} from './types'

import {adress} from './../constants/serverData'

//LADING - ACTIONS
export const loading = () => {
    return {
        type: LOADING
    }
}

//LOGIN - ACTIONS
export const login = (email: string, password: string) => {
    return async dispatch => {
        dispatch (loading())

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
                if (data.success == true) {
                    dispatch(loginSuccess(data.token))
                }
                else {
                    dispatch(loginError(data.errors))
                }
            })
        }
        catch(e) {
            
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