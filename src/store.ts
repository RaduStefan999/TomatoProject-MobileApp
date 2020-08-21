import {createStore, applyMiddleware, combineReducers} from 'redux'
import authenticationRecucer from './reducers/authenticationReducer'
import globalReducer from './reducers/globalReducer'

import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    global: globalReducer,
    authentication: authenticationRecucer
})

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk))

export default configureStore