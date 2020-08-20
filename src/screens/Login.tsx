import React, {useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

//Redux
import {connect} from 'react-redux'
import {login} from './../actions/authentiction'

const mapStetToProps = (state) => {
    return {
        loginErrors: state.authentication.loginErrors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password))
    }
}

//Constants
import colors from './../constants/colors'

//Components
import ErrorDisplay from './../components/ErrorDisplay'
import AuthTemplete from './../components/AuthTemplete'
import AuthInput from './../components/AuthInput'

const Login = (props: any) => {

    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const onChangeInputEmailHandler = (text) => {
        setInputEmail(text)
    }

    const onChangeInputPasswordHandler = (text) => {
        setInputPassword(text)
    }

    return (
        <AuthTemplete>
            {props.loginErrors.length > 0 && <ErrorDisplay errors={props.loginErrors}/>}

            <AuthInput placeholder='Email' icon='user' password={false} onChangeText={onChangeInputEmailHandler} value={inputEmail}/>
            <AuthInput placeholder='Password' icon='lock' password={true} onChangeText={onChangeInputPasswordHandler} value={inputPassword}/>
            
            <TouchableOpacity style={styles.submitButton} onPress={() => props.login(inputEmail, inputPassword)}>
                <Text style={styles.submitTextButton}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                <Text style={styles.translationButton}>Nu aveti cont ? Inregistrati-va aici</Text>
            </TouchableOpacity>
        </AuthTemplete>
    )
}

const styles = StyleSheet.create({

    submitButton: {
        width: '80%',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingVertical: 12,
        marginVertical: 14,
        borderRadius: 20
    },

    submitTextButton: {
        color: colors.background_main,
        fontSize: 16
    },

    translationButton: {
        color: 'white',
        fontSize: 16
    }
})

export default connect(mapStetToProps, mapDispatchToProps) (Login)