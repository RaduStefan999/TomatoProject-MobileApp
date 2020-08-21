import {SET_LOADING} from './types'

export const setLoading = (status: boolean) => {
    return {
        type: SET_LOADING,
        payload: status
    }
}