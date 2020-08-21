import {createStore, applyMiddleware, combineReducers} from 'redux'
import globalReducer from './reducers/globalReducer'
import authenticationRecucer from './reducers/authenticationReducer'
import productsReducer from './reducers/productsReducer'

import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    global: globalReducer,
    authentication: authenticationRecucer,
    products: productsReducer
})

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk))

export default configureStore