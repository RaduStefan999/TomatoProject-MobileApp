import {GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, SET_RELOAD_PRODUCTS} from './types'

import {setLoading} from './global'
import {expiredToken} from './authentiction'
import {adress} from './../constants/serverData'

export const getProducts = (token: string) => {
    
    return async dispatch => {
        dispatch (setLoading(true))

        try {
            await fetch(`${adress}/products?token=${token}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.expiredToken != true) {
                    dispatch(getProductsSuccess(data))
                }
                else {
                    dispatch(expiredToken())
                }
            })
        }
        catch(e) {
            dispatch(getProductsError(['Server connection problem']))
        }

        dispatch (setLoading(false))
    }
}

export const getProductsSuccess = (products: any) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const getProductsError = (errors: any) => {
    return {
        type: GET_PRODUCTS_ERROR,
        payload: errors
    }
}

export const setReloadProducts = (status: boolean) => {
    return {
        type: SET_RELOAD_PRODUCTS,
        payload: status
    }
}