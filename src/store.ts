import {createStore, applyMiddleware, combineReducers} from 'redux'
import authenticationRecucer from './reducers/authenticationReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    authentication: authenticationRecucer
})

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk))

export default configureStore