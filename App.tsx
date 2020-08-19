import React from 'react'

//Redux
import {Provider} from 'react-redux'
import configureStore from './src/store'

const store = configureStore()

//Navigation
import Navigation from './src/navigation/Navigation'

const App = () => {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  )
}

export default App