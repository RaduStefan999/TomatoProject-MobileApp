import React from 'react'
import {} from 'react-native'

//Redux
import {connect} from 'react-redux'

const mapStateToProps = (state: any) => {
    return {
        isLoggedIn: state.authentication.isLoggedIn
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

const Navigation = (props) => {
    return (
        <NavigationContainer>
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