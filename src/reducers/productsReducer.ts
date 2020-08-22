import {GET_PRODUCTS_SUCCESS, 
        GET_PRODUCTS_ERROR, 
        SET_RELOAD_PRODUCTS,
        ADD_PRODUCT_TO_CART,
        REMOVE_PRODUCT_FROM_CART,
        CHANGE_PRODUCT_QUANTITY_CART,
        RESET_PRODUCT_DATA} from './../actions/types'

const initialState = {
    products: [],
    cart: [],
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
        case ADD_PRODUCT_TO_CART: {
            return {
                ...state, cart: state.cart.concat({
                    id: action.payload,
                    quantity: 1
                })
            }
        }
        case REMOVE_PRODUCT_FROM_CART: {
            return {
                ...state, cart: state.cart.filter((product) => product.id != action.payload)
            }
        }
        case CHANGE_PRODUCT_QUANTITY_CART: {
            return {
                ...state, cart: state.cart.map((product) => {
                    if (product.id == action.id) {
                        product.quantity = Math.max(1, product.quantity + action.amount)
                    }

                    return product
                })
            }
        }
        case RESET_PRODUCT_DATA: {
            return {
                ...state, products: [], cart: [], productsErrors: [], reloadProducts: true
            }
        }
        default: {
            return state
        }
    }
}

export default productsReducer