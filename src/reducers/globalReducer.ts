import {SET_LOADING} from './../actions/types'

const initialState = {
    isLoading: false
}

const globalReducer = (state = initialState, action: any) => {
    switch(action.type) {
        
        case SET_LOADING: 
            return {
                ...state, isLoading: action.payload
            }
        default: 
            return state
    }
}

export default globalReducer