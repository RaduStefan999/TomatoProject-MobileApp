import React from 'react'
import {Modal} from 'react-native'

//Redux
import {connect} from 'react-redux'

const mapStateToProps = (state: any) => {
    return {
        isLoggedIn: state.authentication.isLoggedIn,
        isLoading: state.authentication.isLoading
    }
}

//Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

//Screens
import Login from './../screens/Login'
import Register from './../screens/Register'
import Home from './../screens/Home'

//Components
import Loading from './../components/Loading'

const Navigation = (props) => {
    return (
        <NavigationContainer>
            <Loading visible={props.isLoading}/>
            <Stack.Navigator>
                {props.isLoggedIn ? (
                    <>
                        <Stack.Screen name='Home' component={Home}/>
                    </>
                ):
                (
                    <>
                        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
                        <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default connect(mapStateToProps) (Navigation)