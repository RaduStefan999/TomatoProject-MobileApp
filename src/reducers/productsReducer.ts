import {GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, SET_RELOAD_PRODUCTS} from './../actions/types'

const initialState = {
    products: [],
    productsErrors: [],
    reloadProducts: true
}

const productsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS: 
            return {
                ...state, products: action.payload
            }
        case GET_PRODUCTS_ERROR: 
            return {
                ...state, productsErrors: action.payload
            }
        case SET_RELOAD_PRODUCTS: {
            return {
                ...state, reloadProducts: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default productsReducer