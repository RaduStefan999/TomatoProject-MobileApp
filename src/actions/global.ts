import {SET_LOADING, RESET_AUTHENTICATION_DATA, RESET_PRODUCT_DATA} from './types'

export const setLoading = (status: boolean) => {
    return {
        type: SET_LOADING,
        payload: status
    }
}

//RESET DATA
export const resetAuthenticationData = () => {
    return {
        type: RESET_AUTHENTICATION_DATA
    }
}

export const resetProductData = () => {
    return {
        type: RESET_PRODUCT_DATA
    }
}