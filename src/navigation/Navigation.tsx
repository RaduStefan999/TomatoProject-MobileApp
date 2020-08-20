import React from 'react'
import {} from 'react-native'

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

//Constants
import colors from './../constants/colors'

//Screens
import Login from './../screens/Login'
import Register from './../screens/Register'
import Home from './../screens/Home'
import Cart from './../screens/Cart'

//Components
import Loading from './../components/Loading'
import HeaderButtons from './../components/HeaderButtons'

//HeaderOptions
const headerOptions = (title: string, navigateToTab: string, icon: string) => {
    return {
        title: title,
        headerStyle: {
            backgroundColor: colors.background_main
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        headerRight: () => <HeaderButtons navigateToTab={navigateToTab} icon={icon}/>
    }
}

const Navigation = (props) => {
    return (
        <NavigationContainer>
            <Loading visible={props.isLoading}/>
            <Stack.Navigator>
                {props.isLoggedIn ? (
                    <>
                        <Stack.Screen name='Home' component={Home} options={headerOptions('Tomato Products', 'Cart', 'shopping-cart')}/>
                        <Stack.Screen name='Cart' component={Cart} options={headerOptions('Your Cart', 'Home', 'list')}/>
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