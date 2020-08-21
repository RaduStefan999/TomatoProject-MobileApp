import {LOADING_START, LOADING_STOP} from './../actions/types'

const initialState = {
    isLoading: false
}

const globalReducer = (state = initialState, action: any) => {
    switch(action.type) {
        
        case LOADING_START: 
            return {
                ...state, isLoading: true
            }
        case LOADING_STOP: 
            return {
                ...state, isLoading: false
            }
        default: 
            return state
    }
}

export default globalReducer