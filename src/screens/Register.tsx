import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

//Constants
import colors from './../constants/colors'

//Components
import ErrorDisplay from './../components/ErrorDisplay'
import AuthTemplete from './../components/AuthTemplete'
import AuthInput from './../components/AuthInput'

const Register = (props: any) => {
    return (
        <AuthTemplete>
            <ErrorDisplay />

            <AuthInput placeholder='Email' icon='user' password={false} onChange={() => {}}/>
            <AuthInput placeholder='Password' icon='lock' password={true} onChange={() => {}}/>
            
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitTextButton}>LOGIN</Text>
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

export default Register