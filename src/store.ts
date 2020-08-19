import {createStore, combineReducers} from 'redux'
import authenticationRecucer from './reducers/authenticationReducer'

const rootReducer = combineReducers({
    authentication: authenticationRecucer
})

const configureStore = () => createStore(rootReducer)

export default configureStore