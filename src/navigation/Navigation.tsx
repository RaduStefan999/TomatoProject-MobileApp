import React from 'react'
import {} from 'react-native'

//Navigation
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

//Screens
import Login from './../screens/Login'

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation