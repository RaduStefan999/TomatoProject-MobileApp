import React, {useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

//Redux
import {connect} from 'react-redux'
import {register} from './../actions/authentiction'

const mapStetToProps = (state) => {
    return {
        registerErrors: state.authentication.registerErrors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (email, name, password) => dispatch(register(email, name, password))
    }
}

//Constants
import colors from './../constants/colors'

//Components
import ErrorDisplay from './../components/ErrorDisplay'
import AuthTemplete from './../components/AuthTemplete'
import AuthInput from './../components/AuthInput'

const Register = (props: any) => {

    const [inputEmail, setInputEmail] = useState()
    const [inputName, setInputName] = useState()
    const [inputPassword, setInputPassword] = useState()

    const onChangeInputEmailHandler = (text) => {
        setInputEmail(text)
    }

    const onChangeInputNameHandler = (text) => {
        setInputName(text)
    }

    const onChangeInputPasswordHandler = (text) => {
        setInputPassword(text)
    }

    return (
        <AuthTemplete>
            {props.registerErrors.length > 0 && <ErrorDisplay errors={props.registerErrors}/>}

            <AuthInput placeholder='Email' icon='user' password={false} onChangeText={onChangeInputEmailHandler} value={inputEmail}/>
            <AuthInput placeholder='Name' icon='address-book' password={false} onChangeText={onChangeInputNameHandler} value={inputName}/>
            <AuthInput placeholder='Password' icon='lock' password={true} onChangeText={onChangeInputPasswordHandler} value={inputPassword}/>
            
            <TouchableOpacity style={styles.submitButton} onPress={() => props.register(inputEmail, inputName, inputPassword)}>
                <Text style={styles.submitTextButton}>REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.translationButton}>Aveti deja cont ? Autentificati-va aici</Text>
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

export default connect(mapStetToProps, mapDispatchToProps) (Register)